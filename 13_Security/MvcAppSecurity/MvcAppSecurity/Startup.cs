using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OpenIdConnect;
using System.IdentityModel.Tokens;
using System.Security.Claims;

[assembly: OwinStartup(typeof(MvcAppSecurity.Startup))]

namespace MvcAppSecurity
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = "cookies",
                CookieName = "MyAppAuthCookie",
                ExpireTimeSpan = TimeSpan.FromMinutes(30),
                SlidingExpiration = true,
                //LoginPath = new PathString("/home/login")
            });

            JwtSecurityTokenHandler.InboundClaimTypeMap.Clear();

            app.UseOpenIdConnectAuthentication(new OpenIdConnectAuthenticationOptions {
                AuthenticationType = "oidc",
                SignInAsAuthenticationType = "cookies",
                Authority = "https://localhost:44333/core",
                ClientId = "mvc_demo",
                RedirectUri = "http://localhost:13663/",
                ResponseType = "id_token token",
                Scope = "openid slb api1",
                Notifications = new OpenIdConnectAuthenticationNotifications
                {
                    SecurityTokenValidated = n =>
                    {
                        var access_token = n.ProtocolMessage.AccessToken;
                        n.AuthenticationTicket.Identity.AddClaim(new Claim("access_token", access_token));
                        return Task.FromResult(0);
                    }
                }
            });
        }
    }
}
