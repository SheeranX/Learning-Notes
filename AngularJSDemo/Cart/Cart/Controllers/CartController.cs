using Cart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Cart.Controllers
{
    public class CartController : ApiController
    {

        Shopcart[] cart = new Shopcart[]
        {
            new Shopcart{Id="G0001",Name="Sheeran",Quantity=1,Price=12.3,ImgUrl="taylor_1.jpg",Description="the singer song-writer"},
            new Shopcart{Id="G0002",Name="Taylor",Quantity=2,Price=13.3,ImgUrl="taylor_1.jpg",Description="my favorite female singer"},
            new Shopcart{Id="G0003s",Name="Coldplay",Quantity=3,Price=14.3,ImgUrl="taylor_1.jpg",Description="Not a band but artist"}
        };

        public IEnumerable<Shopcart> GetAllCart() {
            //var cart = new List<Shopcart> { 
            //    new Shopcart{Id="G0001",Name="Sheeran",Quantity=1,Price=12.3,ImgUrl="taylor_1.jpg",Description="the singer song-writer"},
            //    new Shopcart{Id="G0002",Name="Taylor",Quantity=2,Price=13.3,ImgUrl="taylor_1.jpg",Description="my favorite female singer"},
            //    new Shopcart{Id="G0003s",Name="Coldplay",Quantity=3,Price=14.3,ImgUrl="taylor_1.jpg",Description="Not a band but artist"}
            //};

            return cart;
        }
    }
}
