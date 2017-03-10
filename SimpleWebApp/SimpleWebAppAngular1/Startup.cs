using Owin;
using Microsoft.Owin;
using SimpleWebAppAngular1;

[assembly: OwinStartupAttribute(typeof(Startup))]
namespace SimpleWebAppAngular1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
