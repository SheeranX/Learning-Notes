using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryDemo
{
   public class FashionFactory:IFactory
    {
       public ICoat CreateCoat() {
           return new FashionCoat();
       }
    }
}
