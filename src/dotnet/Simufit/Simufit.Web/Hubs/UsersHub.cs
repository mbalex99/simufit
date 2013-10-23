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

        public UsersHub()
        {
            _userService = new UserService();
        }

        public User GetClaims(string accessToken)
        {
            var client = new FacebookClient(accessToken);

            dynamic me = client.Get("me");

            var user = new User()
            {
                FacebookId = me.id,
                Role = Role.Normal
            };

            _userService.Upsert(user);

            return user;
        }
    }
}