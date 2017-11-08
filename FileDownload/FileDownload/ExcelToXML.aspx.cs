using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.OleDb;
using System.IO;
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
                //string path = Path.GetDirectoryName(FileUpload.PostedFile.FileName);

                GridView.DataSource = ExcelToDataTable(path,true);
                GridView.DataBind();
            }
        }

        public static DataTable ExcelToDataTable(string filePath, bool isColumnName)
        {
            DataTable datatable = null;
            FileStream fs = null;
            DataColumn column = null;
            DataRow datarow = null;
            IWorkbook workbook = null;
            ISheet sheet = null;
            IRow row = null;
            ICell cell = null;
            int startRow = 0;

            using (fs = File.OpenRead(filePath))
            {
                if (filePath.IndexOf(".xlsx") > 0)
                    workbook = new XSSFWorkbook(fs);
                else if (filePath.IndexOf(".xls") > 0)
                    workbook = new HSSFWorkbook(fs);

                if (workbook != null)
                {
                    sheet = workbook.GetSheetAt(0);
                    datatable = new DataTable();
                    if (sheet != null)
                    {
                        int rowCount = sheet.LastRowNum;
                        if (rowCount > 0)
                        {
                            IRow firstRow = sheet.GetRow(0);
                            try
                            {
                                string title1 = firstRow.GetCell(0).StringCellValue;
                                string title2 = firstRow.GetCell(1).StringCellValue;
                                string title3 = firstRow.GetCell(2).StringCellValue;

                                if (title1.Equals("序号") && title2.Equals("姓名") && title3.Equals("入团时间"))
                                {

                                    int cellCount = firstRow.LastCellNum;

                                    if (isColumnName)
                                    {
                                        startRow = 1;

                                        for (int i = firstRow.FirstCellNum; i < cellCount; ++i)
                                        {
                                            cell = firstRow.GetCell(i);
                                            if (cell != null)
                                            {
                                                if (cell.StringCellValue != null)
                                                {
                                                    column = new DataColumn(cell.StringCellValue);
                                                    datatable.Columns.Add(column);
                                                }
                                            }
                                        }

                                    }
                                    else
                                    {
                                        for (int i = firstRow.FirstCellNum; i < cellCount; ++i)
                                        {
                                            column = new DataColumn("column" + (i + 1));
                                            datatable.Columns.Add(column);
                                        }
                                    }


                                    for (int i = startRow; i < rowCount; ++i)
                                    {
                                        row = sheet.GetRow(i);
                                        if (row == null) continue;

                                        datarow = datatable.NewRow();

                                        for (int j = row.FirstCellNum; j < cellCount; j++)
                                        {
                                            cell = row.GetCell(j);

                                            if (cell == null)
                                                datarow[j] = "";
                                            else
                                            {
                                                switch (cell.CellType)
                                                {
                                                    case CellType.Blank:
                                                        datarow[j] = "";
                                                        break;
                                                    case CellType.Numeric:
                                                        short format = cell.CellStyle.DataFormat;
                                                        if (format == 14 || format == 57 || format == 58)
                                                            datarow[j] = cell.DateCellValue;
                                                        else
                                                            datarow[j] = cell.NumericCellValue;
                                                        break;
                                                    case CellType.String:
                                                        datarow[j] = cell.StringCellValue;

                                                        break;

                                                }
                                            }
                                        }
                                        datatable.Rows.Add(datarow);
                                    }

                                }//title
                            }
                            catch (Exception) {
                                datatable = null;
                                File.Delete(filePath);
                            }
                           

                           
                        }
                    }
                }
            }
            return datatable;
        }
    }
}