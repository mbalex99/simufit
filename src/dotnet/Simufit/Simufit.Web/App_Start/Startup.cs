using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.Owin;
using Newtonsoft.Json;
using Owin;
using SimpleInjector;
using Simufit.DataAccess.Services;
using Simufit.DataAccess.Services.Contracts;
using Simufit.DataAccess.Services.Implementations;
using Simufit.Web.Infrastructure;

[assembly: OwinStartup(typeof(Simufit.Web.App_Start.Startup))]
namespace Simufit.Web.App_Start
{
    
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var container = new Container();
            container.Register<IUserService, UserService>();
            container.Register<IEntryService, EntryService>();

            var resolver = new SimpleInjectorResolver(container);

            var config = new HubConfiguration()
            {
                Resolver = resolver
            };

            app.MapSignalR(config);
        }
    }
}