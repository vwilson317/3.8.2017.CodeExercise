using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using AutoMapper;
using AutoMapper.Mappers;
using DataAccess;
using SimpleWebApi.Controllers;
using Module = Autofac.Module;

namespace SimpleWebApi.IoC
{
    public class SimpleWebApiModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(typeof(AssemblyStarter).GetTypeInfo().Assembly)
                .AsImplementedInterfaces();

            builder.Register(context =>
            {
                //TODO: figure out why this doesn't work
                var profilesRight = context.Resolve<IEnumerable<Profile>>().ToList();
                var profiles = Enumerable.Repeat(new MappingProfile(), 1).ToList();

                var config = new MapperConfiguration(mapperConfig =>
                {
                    profiles.ForEach(mapperConfig.AddProfile);

                });
                return config;
            }).SingleInstance()
                .AutoActivate()
                .AsSelf();

            builder.Register(context =>
            {
                //var realContext = context.Resolve<IComponentContext>();

                var config = context.Resolve<MapperConfiguration>();
                var mapper = config.CreateMapper();
                return mapper;
            }).As<IMapper>();

            builder.RegisterControllers(Assembly.GetExecutingAssembly());
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
        }
    }
}