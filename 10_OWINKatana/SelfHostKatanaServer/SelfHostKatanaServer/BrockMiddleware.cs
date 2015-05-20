using Microsoft.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHostKatanaServer
{
    using Owin;
using AppFunc = Func<IDictionary<string, object>, Task>;

    public static class BrockMiddlewareAppBuilderExtensions
    {
        public static IAppBuilder UseBrock(this IAppBuilder app)
        {
            return app.UseBrock(new BrockMiddlewareOptions
            {
                Enabled = true
            });
        }
        
        public static IAppBuilder UseBrock(this IAppBuilder app, BrockMiddlewareOptions options)
        {
            return app.Use<BrockMiddleware>(options);
        }
    }

    public class BrockMiddlewareOptions
    {
        public bool Enabled { get; set; }
    }

    public class BrockMiddleware
    {
        AppFunc _next;
        BrockMiddlewareOptions _options;

        public BrockMiddleware(Func<IDictionary<string, object>, Task> next, BrockMiddlewareOptions options)
        {
            _next = next;
            _options = options;
        }

        public async Task Invoke(IDictionary<string, object> env)
        {
            if (_options.Enabled)
            {
                var ctx = new OwinContext(env);
                ctx.Response.Headers.Add("brock", new string[] { "brock was here" });
            }
            await _next(env);
        }
    }
}
