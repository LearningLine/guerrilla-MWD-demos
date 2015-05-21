using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication1.Ef
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal? UnitPrice { get; set; }
    }

    public class ProductDb : DbContext
    {
        public ProductDb()
            : base("nw")
        {
        }
        public DbSet<Product> Products { get; set; }
    }
}