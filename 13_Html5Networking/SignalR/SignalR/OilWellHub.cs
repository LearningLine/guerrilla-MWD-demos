using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalR
{
    [HubName("OilWell")]
    public class OilWellHub : Hub
    {
        public override System.Threading.Tasks.Task OnConnected()
        {
            //this.Context.ConnectionId;
            //this.Context.User;
            //this.Groups.Add(this.Context.ConnectionId, "Emergency");
            return base.OnConnected();
        }

        public void StartDrilling(string name)
        {
            this.Clients.Others.DrillingStarted(name);
        }
    }
}