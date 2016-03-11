using Microsoft.AspNet.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;

namespace app
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            //services.AddTransient;
            //services.AddScoped;
            //services.AddSingleton;
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseMvcWithDefaultRoute();

            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute("default",
            //        "{controller=Home}/{action=Index}/{id?}");
            //});

            //app.Use(async (ctx, next) =>
            //{
            //    Console.WriteLine(ctx.Request.Path);
            //    await ctx.Response.WriteAsync("<h1>jkdfhfdjhkfdello DNX/Kestrel!</h1>");
            //});
        }
    }
}
