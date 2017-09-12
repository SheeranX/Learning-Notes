using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FactoryDemo
{
  public  class FashionCoat:ICoat
    {
      public void ShowCoat() {
          Console.Write("this is fashion coat");
      }
    }
}
