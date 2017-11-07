using System;
using System.Collections.Generic;
using System.Data;
using System.Data.OleDb;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FileDownload
{
    public partial class ExcelToXML : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnUpload_Click(object sender, EventArgs e)
        {
            if (FileUpload.HasFile)
            {
                string filename = FileUpload.FileName.ToString();
                string path = Server.MapPath("~/Template/")+filename;
                FileUpload.PostedFile.SaveAs(path);
                DataSet ds = new DataSet();

                string conn = "Provider=Microsoft.Ace.OleDb.12.0;" + "data source=" + path + ";Extended Properties='Excel 12.0; HDR=Yes; IMEX=1'"; 
                OleDbConnection olecon = new OleDbConnection(conn);
                olecon.Open();

                string sql = "select*from[$Sheet1]";
                OleDbDataAdapter oleda = new OleDbDataAdapter(sql,conn);
                oleda.Fill(ds);
                olecon.Close();

                GridView.DataSource = ds;
                GridView.DataBind();

                string file_name = "English.xml";

                string xml_path =Server.MapPath("/Template/")+file_name;

                ds.WriteXml(xml_path);
                ds.Dispose();
            }
        }
    }
}