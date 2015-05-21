using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Model
{
    public class ProductModel
    {
        [Required]
        public string Name { get; set; }
        [Range(0, Double.MaxValue, ErrorMessage="Bad PRICE!")]
        public decimal? Price { get; set; }

        public List<Link> Links { get; set; }
//        public Link ProductDetails { get; set; }
//        public Link Delete { get; set; }
    }

    public class Link
    {
        public string Rel { get; set; }
        public string Href { get; set; }
    }
}