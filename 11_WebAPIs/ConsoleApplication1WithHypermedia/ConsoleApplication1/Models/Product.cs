﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1.Models
{
    public class Entity
    {
        public object data { get; set; }
        public Dictionary<string, string> Links { get; set; }
    }

    public class ProductSummary
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Dictionary<string, string> Links { get; set; }
    }

    public class ProductDetails
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal? Price { get; set; }
        public Dictionary<string, string> Links { get; set; }
    }
}