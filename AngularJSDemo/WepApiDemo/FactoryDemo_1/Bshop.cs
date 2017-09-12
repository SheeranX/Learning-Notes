using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryDemo_1
{
    public  class Bshop:IShop
    {
        public double Getrent(int month,double monthprice,double performance)
        {
            Console.Write("B shop rents");
            return  month*(monthprice+performance+5);
        }
    }
}
