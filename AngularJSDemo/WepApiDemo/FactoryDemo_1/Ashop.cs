using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryDemo_1
{
   public  class Ashop : IShop
    {
       public double Getrent(int days,double dayprice,double performance) {
           Console.Write("A shop");
           return days * dayprice + performance + 1;
       }
    }
}
