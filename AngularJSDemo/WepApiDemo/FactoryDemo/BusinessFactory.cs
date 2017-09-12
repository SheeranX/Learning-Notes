using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryDemo
{
   public  class BusinessFactory:IFactory
    {
       public ICoat CreateCoat() {
           return new BusinessCoat();
       }
    }
}
