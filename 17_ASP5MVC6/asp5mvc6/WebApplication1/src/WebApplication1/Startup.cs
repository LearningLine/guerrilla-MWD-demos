using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Framework.DependencyInjection;

namespace WebApplication1
{
    public interface IFoo
    {
        string GetData();
    }

    public class Foo : IFoo
    {
        public string GetData()
        {
            return "yay data!";
        }
    }

    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().ConfigureMvc(mvc =>
            {
                //mvc.Filters.Add();
            });

            //services.AddInstance<IFoo>(new Foo());
            services.AddSingleton<IFoo, Foo>();
            //services.AddTransient<IFoo, Foo>();
            //services.AddScoped<IFoo, Foo>();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseMvc(routes =>
            {
                routes.MapRoute("default", 
                    "{controller=Home}/{action=Index}/{id?}");
            });


            //app.UseMiddleware<BrockMW>();

            //app.Use(async (ctx, next) =>
            //{
            //    await ctx.Response.WriteAsync("<h1>Hello ASP5</h1>");
            //});
        }
    }

    public class BrockMW
    {
        private IFoo _foo;
        private RequestDelegate _next;

        public BrockMW(RequestDelegate next, IFoo foo)
        {
            _next = next;
            _foo = foo;
        }

        public async Task Invoke(HttpContext ctx)
        {
            var data = _foo.GetData();
            await ctx.Response.WriteAsync($"<h1>Brock MW {data}</h1>");
            //_next();
        }
    }
}
