using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Collections.Generic;

[assembly: OwinStartup(typeof(IISExpressOWINHost.Startup))]

namespace IISExpressOWINHost
{
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
    
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Use(async (ctx, next) =>
            {
                //AppBuilder b = new AppBuilder();
                //b.Use(async (ctx2, next2) =>
                //{
                //});
                //var appFunc = b.Build();
                //if (ctx.Request.Method ==  "GET")
                //{
                //    appFunc(ctx.Environment);
                //}
                //else
                //{
                //    next();
                //}

                //var method = ctx.Environment["owin.RequestMethod"];
                //ctx.Environment["owin.RequestMethod"] = "POST";

                ctx.Environment["foo"] = true;

                Console.WriteLine(ctx.Request.Path);
                await next();
                Console.WriteLine(ctx.Response.StatusCode);
            });

            app.UseBrock();

            //app.Use<BrockMiddleware>(new BrockMiddlewareOptions {
            //    Enabled = true
            //});

            app.Map("/hello", helloBranch =>
            {
                helloBranch.Run(async (ctx) =>
                {
                    if (true == (bool)ctx.Environment["foo"])
                    {

                    }

                    await ctx.Response.WriteAsync("<h1>Hello Katana!</h1>");
                });
            });

            app.Use(async (ctx, next) =>
            {
                await ctx.Response.WriteAsync("<h1>Not hello</h1>");

                //await next();
            });
        }
    }
}
