using System.Web;
using System.Web.Optimization;

namespace Simufit.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs")
                .Include("~/Scripts/angular.js")
                .Include("~/Scripts/angular-route.js")
                .Include("~/Scripts/angular-touch.js"));

            bundles.Add(new ScriptBundle("~/bundles/otherlibraries")
                .Include("~/Scripts/bootstrap.js")
                .Include("~/Scripts/moment.js")
                .Include("~/Scripts/lodash.js")
                .Include("~/Scripts/jquery.signalR-2.0.0.js")
                .Include("~/Scripts/fullcalendar.js"));

            bundles.Add(new ScriptBundle("~/bundles/client")
                .Include("~/Scripts/client/application.js")
                .Include("~/Scripts/client/controllers/*.js")
                .Include("~/Scripts/client/directives/*.js")
                .Include("~/Scripts/client/filters/*.js")
                .Include("~/Scripts/client/services/*.js"));


            bundles.Add(new StyleBundle("~/Content/styles")
                .Include("~/Content/styles/bootstrap.css")
                .Include("~/Content/styles/animate.css")
                .Include("~/Content/styles/font.css")
                .Include("~/Content/styles/plugin.css")
                .Include("~/Content/styles/app.css")
                .Include("~/Content/styles/simufit.css")
                .Include("~/Content/fullcalendar/fullcalendar.css"));

        }
    }
}