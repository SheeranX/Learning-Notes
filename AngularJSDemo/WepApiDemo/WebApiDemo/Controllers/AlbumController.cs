using Newtonsoft.Json;
using Admin;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApiDemo.Controllers
{
    public class AlbumController : ApiController
    {
        //string connect = ConfigurationManager.ConnectionStrings["conn"].ToString();
        // DataSet ds = 
        public DataSet GetAlbum()//惯例优先原则
        {
            return SqlHelper.Query("select * from tb_album");
        }

        public DataSet PostAlbumById(int id) {
            return SqlHelper.Query("select * from tb_album where albumid = "+id+"");
        }

        public DataSet GetAlbumByName(string name) {
            return SqlHelper.Query("select * from tb_album where albumName ="+name+"");
        }

    }
}

