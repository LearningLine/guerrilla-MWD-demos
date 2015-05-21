using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class MyActionFilterAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // 1
        }

        public override void OnResultExecuted(ResultExecutedContext filterContext)
        {
            // 3
        }

        public override void OnResultExecuting(ResultExecutingContext filterContext)
        {
            // 4
        }

        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            // 6
        }
    }

    [MyActionFilter]
    public class ProductsController : Controller
    {
        Ef.ProductDb db = new Ef.ProductDb();

        // GET ~/Products/PlaceOrder
        
        public ActionResult Index(string filter)
        {
            var q =
                from p in db.Products
                select p;
            
            if (filter != null)
            {
                q = from p in q
                    where p.ProductName.Contains(filter)
                    select p;
            }

            var list = q.ToArray();

            var vm = new ProductIndexViewModel{
                Filter = filter,
                Count = list.Count(),
                Products = list
            };
            // 2
            return View("Index", vm);

            //return new ViewResult
            //{
            //    ViewName = "Index"
            //};

            //return Redirect("http://google.com")
            //return new RedirectResult("http://google.com");

            //return new ContentResult {
            //    Content="hello MVC!", 
            //    ContentType="text/plain"
            //};
        }

        public ActionResult Edit(int id)
        {
            var product =
                db.Products.SingleOrDefault(x => x.ProductId == id);
            
            if (product == null)
            {
                return Redirect("/");
            }

            return View("Edit", product);
        }

        [HttpPost]
        public ActionResult Update(Ef.Product model)
        {
            var product =
                db.Products.SingleOrDefault(x => x.ProductId == model.ProductId);

            if (product == null)
            {
                return Redirect("/");
            }

            product.ProductName = model.ProductName;
            product.UnitPrice = model.UnitPrice;
            db.SaveChanges();

            return Redirect("~/");
        }
    }

}