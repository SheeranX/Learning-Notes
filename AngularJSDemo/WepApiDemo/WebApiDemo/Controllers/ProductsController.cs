using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiDemo.Models;

namespace WebApiDemo.Controllers
{
    public class ProductsController : ApiController
    {
        Product[] products = new Product[] { 
            new Product{Id=1,Name="Apple",Catagory="fruit",Prcie=11},
            new Product{Id=2,Name="Orange",Catagory="fruit",Prcie=33},
            new Product{Id=3,Name="boom",Catagory="boombo",Prcie=44}
        };

        public IEnumerable<Product> GetAllProducts() {
            return products;
        }
        public IHttpActionResult GetProduct(int id) 
        {
            var product = products.FirstOrDefault((p)=>p.Id==id);
            if (product == null)
            {
                return NotFound();  
            }

            return Ok(product);
        }
    }
}
