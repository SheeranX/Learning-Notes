using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryDemo_1
{
    interface Factory
    {
        IShop CreateShop();
    }
}
