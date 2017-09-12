using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cart.Models
{
    public class Shopcart
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public string ImgUrl { get; set; }
        public string Description { get; set; }
    }
}