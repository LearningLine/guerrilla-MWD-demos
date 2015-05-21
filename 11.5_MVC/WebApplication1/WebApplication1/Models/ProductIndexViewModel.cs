using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Ef;

namespace WebApplication1.Models
{
    public class ProductIndexViewModel
    {
        public string Filter { get; set; }
        public int Count { get; set; }
        public IEnumerable<Product> Products { get; set; }
    }
}