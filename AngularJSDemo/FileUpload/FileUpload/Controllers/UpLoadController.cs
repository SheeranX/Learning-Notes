using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace FileUpload.Controllers
{
    public class UpLoadController : ApiController
    {
        [HttpPost]
        public string PostUpLoad(HttpPostedFileBase file)
        {
            var fileName = file.FileName;
            var filePath = HttpContext.Current.Server.MapPath(string.Format("~/{0}", "File"));
            file.SaveAs(Path.Combine(filePath, fileName));
            return "success";
        }
    }
}
