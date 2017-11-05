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

        [HttpPost]
        public string PostFiles()
        {
            string result = "";
            HttpFileCollection filelist = HttpContext.Current.Request.Files;
            if (filelist != null && filelist.Count > 0)
            {
                for (int i = 0; i < filelist.Count; i++)
                {
                    HttpPostedFile file = filelist[i];
                    String Tpath = "/" + DateTime.Now.ToString("yyyy-MM-dd") + "/";
                    string filename = file.FileName;
                    string FileName = DateTime.Now.ToString("yyyyMMddHHmmssfff");
                    string FilePath = "";//保存路径 + "\\" + Tpath + "\\";
                    DirectoryInfo di = new DirectoryInfo(FilePath);
                    if (!di.Exists) { di.Create(); }
                    try
                    {
                        file.SaveAs(FilePath + FileName);
                       // result.obj = (Tpath + FileName).Replace("\\", "/");
                    }
                    catch (Exception ex)
                    {
                        result = "上传文件写入失败：" + ex.Message;
                    }
                }
            }
            else
            {
                result = "上传的文件信息不存在！";
            }

            return result;
        }  
    }
}
