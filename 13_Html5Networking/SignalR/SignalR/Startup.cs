using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.AspNet.SignalR;

[assembly: OwinStartup(typeof(SignalR.Startup))]

namespace SignalR
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();


            Task.Factory.StartNew(async () =>
            {
                while(true)
                {
                    await Task.Delay(2000);
                    var hub = GlobalHost.ConnectionManager.GetHubContext<OilWellHub>();
                    hub.Clients.All.DrillingStarted("spam " + DateTime.Now);
                }
            });
        }
    }
}
