using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;

namespace FileDownload.App_Code
{
    public class ExcelUtility
    {
       /// <summary>
       /// 将excel导入到datatable
       /// </summary>
       /// <param name="filePath">excel路径</param>
       /// <param name="isColumnName">第一行是否是列名</param>
       /// <returns>返回datatable</returns>
        public static DataTable ExcelToDataTable(string filePath,bool isColumnName) {
            DataTable datatable = null;
            FileStream fs = null;
            DataColumn column = null;
            DataRow datarow=null;
            IWorkbook workbook = null;
            ISheet sheet = null;
            IRow row = null;
            ICell cell = null;
            int startRow = 0;

            using (fs = File.OpenRead(filePath))
            {
                if (filePath.IndexOf(".xlx") > 0)
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
                            else {
                                for (int i = firstRow.FirstCellNum; i < cellCount; ++i) {
                                    column = new DataColumn("column"+(i+1));
                                    datatable.Columns.Add(column);
                                }
                            }

                            for (int i = startRow; i < rowCount; ++i) {
                                row = sheet.GetRow(i);
                                if (row == null) continue;

                                datarow = datatable.NewRow();

                                for (int j = row.FirstCellNum; j < cellCount; ++j) {
                                    cell = row.GetCell(j);

                                    if (cell == null)
                                        datarow[j] = "";
                                    else {
                                        switch (cell.CellType)
                                        { 
                                            case CellType.Blank:
                                                datarow[j] = "";
                                                break;
                                            case CellType.Numeric:
                                                short format = cell.CellStyle.DataFormat;
                                                if(format==14||format==57||format==58)
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
                        
                        }
                    }
                }
            }
            return datatable;
        }
    }
}