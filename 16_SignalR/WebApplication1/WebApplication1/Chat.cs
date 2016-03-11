using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class Chat : Hub
    {
        public override Task OnConnected()
        {
            //this.Context.User
            this.Groups.Add(this.Context.ConnectionId, "cats");
            return base.OnConnected();
        }

        public void SendChatMessage(string chat)
        {
            //this.Clients.Client("1234-56").GotChatMessage(chat);
            //this.Clients.Group("cats").GotChatMessage(chat);
            this.Clients.All.GotChatMessage(chat);
        }
    }
}