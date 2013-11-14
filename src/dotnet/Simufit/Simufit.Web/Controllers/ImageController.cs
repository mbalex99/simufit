using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Backload;
using Backload.Controllers;
using Backload.Eventing.Args;
using Backload.Plugin.Handler;

namespace Simufit.Web.Controllers
{
    public class ImageController : ApiController
    {
        // GET api/ileHandler/
        public async Task<JQueryFileUpload> Get()
        {
            return await HandleRequest();
        }

        // POST api/ileHandler/
        public async Task<JQueryFileUpload> Post()
        {
            return await HandleRequest();
        }

        // DELETE api/values/fileName
        public async Task<JQueryFileUpload> Delete(string fileName)
        {
            return await HandleRequest();
        }


        private async Task<JQueryFileUpload> HandleRequest()
        {
            var request = new HttpRequestWrapper(HttpContext.Current.Request);
            FileUploadHandler handler = new FileUploadHandler(request, null);       // Get an instance of the handler class
            handler.IncomingRequestStarted += handler_IncomingRequestStarted;       // Register event handler for demo purposes

            var task = handler.HandleRequestAsync();                                // Call the asyncronous handler method
            // Do other stuff here
            var jsonResult = (JsonResult)await task;                                // Awaits the result, but does not block the thread
            //var jsonResult = (JsonResult)await handler.HandleRequestAsync();      // Both methods above can be combined 

            return (JQueryFileUpload)jsonResult.Data;                               // JsonResult.Data is of type object and must be casted 
            // to your plugins handler class
        }


        // Demo event handler
        void handler_IncomingRequestStarted(object sender, IncomingRequestEventArgs e)
        {
            var values = e.Param.BackloadValues;
        }
    }
}
