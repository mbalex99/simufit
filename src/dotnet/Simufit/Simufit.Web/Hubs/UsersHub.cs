using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Facebook;
using Microsoft.AspNet.SignalR;
using Simufit.DataAccess.Services;
using Simufit.DataAccess.Services.Contracts;
using  Simufit.Domain.Entities;

namespace Simufit.Web.Hubs
{
    public class UsersHub:Hub
    {
        private readonly IUserService _userService;

        public UsersHub(IUserService userService)
        {
            _userService = userService;
        }

        public void GetClaims(string accessToken)
        {
            var client = new FacebookClient(accessToken);

            dynamic me = client.Get("me");

            var user = new User()
            {
                FacebookId = me.id,
                FirstName = me.first_name,
                LastName = me.last_name,
                Role = Role.Normal
            };

            _userService.Upsert(user);

            Clients.All.gotClaims(user);
        }
    }
}