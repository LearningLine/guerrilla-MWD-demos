using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;
using System.Web.Http;

namespace ConsoleApplication1
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //app.UseDefaultFiles();
            app.UseStaticFiles(new StaticFileOptions
            {
                FileSystem = new PhysicalFileSystem(@"C:\demos\SLB\11_WebAPIs\ConsoleApplication1\ConsoleApplication1\public")
            });

            var config = new HttpConfiguration();
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
                new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver();

            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute("api",
                "api/{controller}/{id}",
                new
                {
                    id = RouteParameter.Optional
                });


            app.UseWebApi(config);
        }
    }
}