using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FileDownload
{
    public partial class FileDownload : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void lkbDownload_Click(object sender, EventArgs e)
        {
            if (ddlLan.SelectedItem.Text == "English")
                fileDown("English");
            else if (ddlLan.SelectedItem.Text == "Spanish")
            {
                fileDown("Spanish");
            }
            else {
                Response.Write("<script>alert('sorry!error')</script>");
            }
        }

        public void fileDown(string filename)
        {
             string  fileName = filename+".xlsx";
             string sFileName = Server.MapPath("Template/" + filename + ".xlsx");

             FileInfo fileinfo = new FileInfo(sFileName);
             if (fileinfo.Exists == true) {
                 FileStream fileStream = new FileStream(sFileName, FileMode.Open);
                 long fileSize = fileStream.Length;
                 byte[] fileBuffer = new byte[fileSize];
                 fileStream.Read(fileBuffer, 0, (int)fileSize);
                 //如果不写fileStream.Close()语句，用户在下载过程中选择取消，将不能再次下载
                 fileStream.Close();

                 Context.Response.ContentType = "application/octet-stream";
                 Context.Response.AppendHeader("Content-Disposition", "attachment;filename=" + HttpUtility.UrlEncode(fileName, Encoding.UTF8));
                 Context.Response.AddHeader("Content-Length", fileSize.ToString());

                 Context.Response.BinaryWrite(fileBuffer);
                 Context.Response.End();
                 Context.Response.Close();
             }
             else
             {
                 Response.Write("<script>alert('sorry!file not exist')</script>");
             }
            
        }
    }
}