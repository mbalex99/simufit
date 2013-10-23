using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using SimpleInjector;
using Simufit.DataAccess.Services;
using Simufit.DataAccess.Services.Contracts;
using Simufit.DataAccess.Services.Implementations;
using Simufit.Web.Infrastructure;

namespace Simufit.Web.App_Start
{
    public static class IocConfig
    {
        public static Container Register()
        {
            var container = new Container();
            container.Register<IUserService, UserService>();
            container.Register<IEntryService, EntryService>();

            return container;
        }
    }
}