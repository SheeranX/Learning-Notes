using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApiDemo.Controllers
{
    public class LoginController : ApiController
    { 
        public UserInfo PostLogin([FromBody]UserInfo info)
        {
            return info;
        }

    }

    public class UserInfo {
        public string Username { get; set; }
        public string Password { get; set; }
    }


}
