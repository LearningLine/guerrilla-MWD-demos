using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.Cookies;

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
                LoginPath = new PathString("/home/login")
            });
        }
    }
}
