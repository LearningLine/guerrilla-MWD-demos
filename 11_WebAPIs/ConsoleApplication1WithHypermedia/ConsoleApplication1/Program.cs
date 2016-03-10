using Microsoft.Owin.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            //using (var db = new Entities.NorthwindDatabase())
            //{
            //    foreach(var p in db.Products)
            //    {
            //        Console.WriteLine(p.ProductName);
            //    }
            //}
            using (WebApp.Start<Startup>("http://localhost:12345"))
            {
                Console.WriteLine("Running!");
                Console.ReadLine();
            }
        }
    }
}
