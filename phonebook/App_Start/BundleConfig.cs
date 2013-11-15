using System.Web;
using System.Web.Optimization;

namespace phonebook
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-1.10.2.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-custom").Include(
                        "~/Scripts/jquery-ui-1.9.0.custom.min.js"));
            
            bundles.Add(new ScriptBundle("~/bundles/chosen-jquery").Include(
                    "~/Scripts/Chosen/chosen.jquery.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-form").Include(
                    "~/Scripts/jquery.form.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-maskedinput").Include(
                    "~/Scripts/jquery.maskedinput-1.3.min.js"));


            bundles.Add(new ScriptBundle("~/bundles/jquery-princiformat").Include(
                    "~/Scripts/jquery.priceformat.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-validade").Include(
                    "~/Scripts/jquery.validade.js"));

            bundles.Add(new ScriptBundle("~/bundles/utilidades").Include(
                    "~/Scripts/utilidades.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
