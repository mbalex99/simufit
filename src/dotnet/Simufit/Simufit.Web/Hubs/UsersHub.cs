using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Facebook;
using Microsoft.AspNet.SignalR;

namespace Simufit.Web.Hubs
{
    public class UsersHub:Hub
    {
        public void GetClaims(string accessToken)
        {
            var client = new FacebookClient(accessToken);
            dynamic me = client.Get("me");
            Clients.Caller.gotClaims(me);
        }
    }
}