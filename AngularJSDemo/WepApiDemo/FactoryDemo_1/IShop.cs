using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryDemo_1
{
   public  interface IShop
   {
       double Getrent(int days,double dayPrice,double performance);
    }
}
