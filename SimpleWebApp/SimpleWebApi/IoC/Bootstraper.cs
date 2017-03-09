using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using Autofac;

namespace SimpleWebApi.IoC
{
    public class Bootstraper
    {
        public static IContainer Initialize<TModule>(params Assembly[] assemblies) where TModule : Autofac.Module, new()
        {
            var builder = new ContainerBuilder();

            #region Assembly Scans

            //Current assembly
            builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly()).AsImplementedInterfaces();

            //Assembly arguments
            builder.RegisterAssemblyTypes(assemblies).AsImplementedInterfaces();

            #endregion

            #region Modules


            //Register application specific modules.  This will allow each endpoint to
            //only register what it needs
            builder.RegisterModule<TModule>();

            #endregion

            return builder.Build();
        }
    }
}