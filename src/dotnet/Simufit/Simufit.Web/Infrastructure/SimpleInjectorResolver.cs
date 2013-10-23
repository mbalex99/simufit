using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using SimpleInjector;
using Container = SimpleInjector.Container;

namespace Simufit.Web.Infrastructure
{
    public sealed class SimpleInjectorResolver : DefaultDependencyResolver
    {
        private Container container;
        private IServiceProvider provider;
        private DefaultDependencyResolver defaultResolver;

        public SimpleInjectorResolver(Container container)
        {
            this.container = container;
            this.provider = container;
            this.defaultResolver =
                new DefaultDependencyResolver();
        }

        [DebuggerStepThrough]
        public object GetService(Type serviceType)
        {
            // Force the creation of hub implementation to go
            // through Simple Injector without failing silently.
            if (!serviceType.IsAbstract &&
                typeof(IHub).IsAssignableFrom(serviceType))
            {
                return this.container.GetInstance(serviceType);
            }

            return this.provider.GetService(serviceType) ??
                this.defaultResolver.GetService(serviceType);
        }

        [DebuggerStepThrough]
        public IEnumerable<object> GetServices(Type serviceType)
        {
            return container.GetAllInstances(serviceType);
        }


        public void Dispose()
        {
            this.defaultResolver.Dispose();
        }
    }
}