using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace FactoryDemo_1
{
    class Program
    {
        static void Main(string[] args)
        {
            string shopname = ConfigurationManager.AppSettings["FactoryTemplate"];
           // Factory f = (Factory)Assembly.Load("FactoryDemo_1").CreateInstance("FactoryDemo_1",+shopname);
        }
    }
}
