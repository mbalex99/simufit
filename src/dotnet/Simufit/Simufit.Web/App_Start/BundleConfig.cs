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

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/styles")
                .Include("~/Content/styles/bootstrap.css")
                .Include("~/Content/styles/animate.css")
                .Include("~/Content/styles/font.css")
                .Include("~/Content/styles/plugin.css")
                .Include("~/Content/styles/app.css")
                .Include("~/Content/styles/simufit.css")
                .Include("~/Content/fullcalendar/fullcalendar.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));
        }
    }
}