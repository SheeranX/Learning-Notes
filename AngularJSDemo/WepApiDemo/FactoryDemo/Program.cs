using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            IFactory factory = new BusinessFactory();
            ICoat coat = factory.CreateCoat();
            coat.ShowCoat();
            
        }
    }
}
