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
    public sealed class SimpleInjectorResolver : DefaultDependencyResolver, IDependencyResolver
    {
        private Container _container;

        public SimpleInjectorResolver(Container container)
        {
            _container = container;
        }
        public override object GetService(Type serviceType)
        {
            if (_container.GetRegistration(serviceType, false) != null)
            {
                return _container.GetInstance(serviceType);
            }
            return base.GetService(serviceType);
        }

        public override IEnumerable<object> GetServices(Type serviceType)
        {
            if (_container.GetRegistration(serviceType, false) != null)
            {
                return _container.GetAllInstances(serviceType);
            }
            return base.GetServices(serviceType);
        }
    }
}