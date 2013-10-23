using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
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
            
            var settings = new JsonSerializerSettings();
            settings.ContractResolver = new SignalRContractResolver();
            var serializer = JsonSerializer.Create(settings);
            GlobalHost.DependencyResolver.Register(typeof(JsonSerializer), () => serializer);


            // 1. Create a new Simple Injector container
            var container = new Container();

            // 2. Configure the container (register)
            container.Register<IUserService, UserService>();
            container.Register<IEntryService, EntryService>();

            // 3. Optionally verify the container's configuration.
            container.Verify();

            var resolver = new SimpleInjectorResolver(container);

            var config = new HubConfiguration()
            {
                Resolver = resolver
            };

            app.MapSignalR(config);
        }
    }
}