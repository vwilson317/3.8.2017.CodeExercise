using System.Web.Optimization;

namespace SimpleWebAppAngular1
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/libs").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/angular.js",
                "~/Scripts/angular-animate.js",
                "~/Scripts/angular-ui-router.js",
                "~/Scripts/moment.min.js",
                "~/Scripts/angular-resource.js",
                "~/Scripts/angular-route.js",
                "~/Scripts/angular-aria/angular-aria.min.js",
                "~/Scripts/angular-material/angular-material.min.js",
                "~/Scripts/angular-material-data-table/md-data-table.js",
                "~/Scripts/modernizr-*",
                "~/Scripts/underscore.js"
          ));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Content/app/app.js",
                "~/Content/app/controllers/*.js",
                "~/Content/app/resources/*.js",
                "~/Content/app/services/*.js",
                "~/Content/app/views/*.js"
                ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/Site.css",
                      "~/Content/bootstrap.css",
                      "~/Content/angular-material.min.css",
                      "~/Content/angular-material.layouts.min.css",
                      "~/Scripts/angular-material-data-table/md-data-table.css"));
        }
    }
}
