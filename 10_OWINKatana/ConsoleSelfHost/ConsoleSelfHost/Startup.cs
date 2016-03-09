using Microsoft.Owin;
using Owin;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ConsoleSelfHost
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // C# PFM
            //app.Use(async (ctx, next) =>
            //{
            //    Console.WriteLine("path: {0}", ctx.Request.Path.ToString());
            //    await next();
            //    Console.WriteLine("status: {0}", ctx.Response.StatusCode);
            //});

            //app.Use<LoggingMiddleware>();

            app.UseLogging();

            app.Use(async (ctx, next) =>
            {
                if (ctx.Request.Path.ToString() == "/hello")
                {
                    await ctx.Response.WriteAsync("<h1>Hello World!</h1>");
                }
                else
                {
                    await next();
                }
            });
        }
    }

    public static class LoggingMiddlewareExtensions
    {
        public static void UseLogging(this IAppBuilder app)
        {
            app.Use<LoggingMiddleware>();
        }
    }

    public class LoggingMiddleware
    {
        Func<IDictionary<string, object>, Task> _next;
        public LoggingMiddleware(Func<IDictionary<string, object>, Task> next)
        {
            _next = next;
        }

        public async Task Invoke(IDictionary<string, object> env)
        {
            var ctx = new OwinContext(env);

            Console.WriteLine("path: {0}", ctx.Request.Path.ToString());
            await _next(env);
            Console.WriteLine("status: {0}", ctx.Response.StatusCode);
        }
    }
}