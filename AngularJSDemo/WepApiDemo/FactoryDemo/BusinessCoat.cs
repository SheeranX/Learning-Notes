using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FactoryDemo
{
    public  class BusinessCoat:ICoat
    {
        public void ShowCoat() {
            Console.Write("this is business");
        }
    }
}
