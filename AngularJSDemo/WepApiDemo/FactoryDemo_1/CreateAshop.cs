using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryDemo_1
{
   public class CreateAshop:Factory
    {
       public IShop CreateShop() {
           return new Ashop();
       }
    }
}
