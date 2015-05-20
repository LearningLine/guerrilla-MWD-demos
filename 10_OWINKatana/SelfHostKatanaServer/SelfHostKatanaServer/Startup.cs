using Microsoft.Owin.Builder;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SelfHostKatanaServer
{
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
