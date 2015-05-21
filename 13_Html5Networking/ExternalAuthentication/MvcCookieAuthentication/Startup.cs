using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.Google;
using Microsoft.Owin.Security.OpenIdConnect;
using System.IdentityModel.Tokens;
using System.Collections.Generic;
using System.Web.Http;
using System.Security.Claims;

[assembly: OwinStartup(typeof(MvcCookieAuthentication.Startup))]

namespace MvcCookieAuthentication
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            JwtSecurityTokenHandler.InboundClaimTypeMap = new Dictionary<string, string>();

            app.UseCookieAuthentication(new CookieAuthenticationOptions { 
                AuthenticationType = "Cookie",
                // ExpireTimeSpan = 
                // SlidingExpiration = true
            });

            app.UseOpenIdConnectAuthentication(new OpenIdConnectAuthenticationOptions
            {
                AuthenticationType = "oidc",
                SignInAsAuthenticationType = "Cookie",
                Authority = "https://localhost:44333/core",
                ClientId = "implicitclient",
                RedirectUri = "https://localhost:44346/",
                ResponseType = "id_token token",
                Scope = "openid profile api1",
                Notifications = new OpenIdConnectAuthenticationNotifications
                {
                    SecurityTokenValidated = n =>
                    {
                        var access_token = n.ProtocolMessage.AccessToken;
                        var claim = new Claim("access_token", access_token);
                        n.AuthenticationTicket.Identity.AddClaim(claim);

                        return Task.FromResult(0);
                    }
                }
            });

            //app.UseGoogleAuthentication(new GoogleOAuth2AuthenticationOptions {
            //   AuthenticationType = "Google",
            //   SignInAsAuthenticationType = "Cookie",
            //   ClientId = "767400843187-mq03ijjo1lp06a738i3b2ldun1ssk2fn.apps.googleusercontent.com",
            //   ClientSecret = "Nqr56CfBR0f6ssz8-CtKfMTY",
            //   //CallbackPath = new PathString("/signin-google")
            //});

            app.Map("/api", api =>
            {
                api.UseIdentityServerBearerTokenAuthentication(new Thinktecture.IdentityServer.AccessTokenValidation.IdentityServerBearerTokenAuthenticationOptions
                {
                    Authority = "https://localhost:44333/core",
                    RequiredScopes = new string[] {"api1"}
                });
                
                var config = new HttpConfiguration();
                config.SuppressDefaultHostAuthentication();
                config.Filters.Add(new HostAuthenticationFilter("Bearer"));
                config.MapHttpAttributeRoutes();
                api.UseWebApi(config);
            });
        }
    }
}
