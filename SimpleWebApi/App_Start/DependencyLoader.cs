using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using SimpleWebApi.IoC;

namespace SimpleWebApi.App_Start
{
    public class DependencyLoader
    {
        public static IContainer Register()
        {
            var container = Bootstraper.Initialize<SimpleWebApiModule>();
            // ASP.Net Wep.API and ASP.NET MVC use two different IDependencyResolver 
            // (because they designed the Wep.API to not depend on ASP.NET MVC)
            // More info: http://stackoverflow.com/questions/12276913/mvc-web-api-not-working-with-autofac-integration
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);
            return container;
        }
    }
}