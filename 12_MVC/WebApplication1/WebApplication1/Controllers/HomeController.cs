using ConsoleApplication1.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        NorthwindDatabase db = new NorthwindDatabase();

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }

        public ActionResult Index()
        {
            var products = db.Products.ToArray();

            //ViewData["products"] = products;

            return View("Index", products);
            //return Redirect("http://google.com");
        }

        // ~/Home/Edit/1
        public ActionResult Edit(int id)
        {
            var product = db.Products.FirstOrDefault(x => x.ProductId == id);

            //ViewData["products"] = products;

            return View("Edit", product);
            //return Redirect("http://google.com");
        }


        [HttpPost]
        //public ActionResult Update(int id, string name, decimal price)
        public ActionResult Update(int id, ProductModel model)
        {
            var product = db.Products.FirstOrDefault(x => x.ProductId == id);

            product.UnitPrice = model.Price;
            product.ProductName = model.Name;
            db.SaveChanges();

            return Redirect("~/Home/Index");
        }
    }

    public class ProductModel
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
    }

}