using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Model;
using System.Net;
using System.Threading;
using System.Threading.Tasks;

namespace WebApplication1
{
    //[RoutePrefix("api/products")]
    // api/{controller}
    public class ProductsController : ApiController
    {
        Ef.ProductDb db = new Ef.ProductDb();

        public ProductsController()
        {
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }

        // GET  ~/api/products
        //[Route("foo/bar/baz-quux/5")]
        public IEnumerable<ProductModel> Get()
        {
            var query =
                from p in db.Products
                select new ProductModel
                {
                    Name = p.ProductName,
                    Price = p.UnitPrice
                };
            var list = query.ToArray();
            return list;
        }

        // GET  ~/api/products/beer
        [Route("api/products/{name}")]
        // GET ~/api/products?name=Beer
        public IHttpActionResult Get(string name)
        {
            var query =
               from p in db.Products
               where p.ProductName == name
               select new ProductModel
               {
                   Name = p.ProductName,
                   Price = p.UnitPrice
               };
            var prod = query.FirstOrDefault();
            if (prod == null)
            {
                return NotFound();
            }
            
            return Ok(prod);
        }

        // GET  ~/api/products/1
        [Route("api/products/{id:int}")]
        public IHttpActionResult Get(int id)
        {
            var query =
               from p in db.Products
               where p.ProductId == id
               select new ProductModel
               {
                   Name = p.ProductName,
                   Price = p.UnitPrice
               };
            var prod = query.FirstOrDefault();
            if (prod == null)
            {
                return NotFound();
            }

            return Ok(prod);
        }

        [Route("api/products/{id:int}")]
        public async Task<IHttpActionResult> Put(int id, ProductModel model)
        {
            if (model == null) 
            {
                ModelState.AddModelError("", "Model is required");
            }
            if (model.Price == null) 
            { 
                ModelState.AddModelError("", "Price is required");
            }

            if (ModelState.IsValid == false)
            {
                return BadRequest(ModelState);
                //return StatusCode(HttpStatusCode.BadRequest);
            }

            var query =
               from p in db.Products
               where p.ProductId == id
               select p;
            
            var prod = query.FirstOrDefault();
            if (prod == null)
            {
                return NotFound();
            }

            prod.ProductName = model.Name;
            prod.UnitPrice = model.Price;
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }


    }
}