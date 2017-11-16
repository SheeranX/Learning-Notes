using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileIO
{
    class Program
    {
        static void Main(string[] args)
        {
            const int max = 3;
            string path = @"C:\Users\steve\Desktop\Life\test";
            string path1 = @"C:\Users\steve\Desktop\Life\";
            string str = null;
            var fileName = Directory.GetFiles(path);
            
            if (fileName.Length == 0)
                Console.WriteLine("======");
            else
            {
                if (fileName.Length == max)
                {
                    for (int i = 0; i < fileName.Length; i++)
                    {
                        if (i == (max - 1))
                        {
                            File.Move(path1+"test.xlsx",fileName[i]);
                            break;
                        }
                           
                        File.Delete(fileName[i]);
                        File.Move(fileName[i+1], fileName[i]);
                    }

                    //File.Copy(path1+"test.xlsx",fileName[0]);
                    //File.Delete(fileName[0]); 
                }
            }
            foreach(var file in fileName){
                int length = file.Split('\\').Length;
                str = file.Split('\\')[length-1];
                Console.WriteLine(str);
            }
           // Directory directory = new Directory();
            Console.ReadKey();
        }
    }
}
