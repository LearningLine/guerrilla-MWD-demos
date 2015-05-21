using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.Google;

[assembly: OwinStartup(typeof(MvcCookieAuthentication.Startup))]

namespace MvcCookieAuthentication
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions { 
                AuthenticationType = "Cookie",
                // ExpireTimeSpan = 
                // SlidingExpiration = true
            });

            app.UseGoogleAuthentication(new GoogleOAuth2AuthenticationOptions {
               AuthenticationType = "Google",
               SignInAsAuthenticationType = "Cookie",
               ClientId = "767400843187-mq03ijjo1lp06a738i3b2ldun1ssk2fn.apps.googleusercontent.com",
               ClientSecret = "Nqr56CfBR0f6ssz8-CtKfMTY",
               //CallbackPath = new PathString("/signin-google")
            });

        }
    }
}
