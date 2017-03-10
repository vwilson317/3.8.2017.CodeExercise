using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SimpleWebApi.App_Start
{
    public class WebApiConfig
    {
        public static void Configure(HttpConfiguration config)
        {
            // New code
            var cors = new EnableCorsAttribute("*","*","*");
            config.EnableCors(cors);

            config.MapHttpAttributeRoutes();

            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}