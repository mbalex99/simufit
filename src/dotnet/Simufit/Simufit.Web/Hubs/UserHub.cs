using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Web;
using Facebook;
using Microsoft.AspNet.SignalR;
using Simufit.DataAccess.Services;
using Simufit.DataAccess.Services.Contracts;
using  Simufit.Domain.Entities;
using Simufit.Web.Infrastructure;

namespace Simufit.Web.Hubs
{
    public class UserHub:Hub
    {
        private readonly IUserService _userService;

        public UserHub()
        {
            _userService = new UserService();
        }

        public void GetUser()
        {
            var user = Context.GetUser();

            Clients.All.gotUser(user);
        }
    }
}