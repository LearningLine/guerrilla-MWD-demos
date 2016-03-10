using ConsoleApplication1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    public class NorthwindService
    {
        Entities.NorthwindDatabase db = new Entities.NorthwindDatabase();

        public IEnumerable<ProductSummary> GetAll(string host)
        {
            return db.Products.ToArray().Select(x => new ProductSummary
            {
                Id = x.ProductId,
                Name = x.ProductName,
                Links = new Dictionary<string, string>
                {
                    { "details",  host + "/api/products/" + x.ProductId}
                }
            });
        }

        internal ProductDetails GetDetails(int id, string host)
        {
            var item = db.Products.FirstOrDefault(x => x.ProductId == id);
            if (item == null) return null;

            return new ProductDetails
            {
                Id = item.ProductId,
                Name = item.ProductName,
                Price = item.UnitPrice,
                Links = new Dictionary<string, string>
                {
                    //{"update", host + "/api/product/" + item.ProductId },
                    {"image", host + "/api/product/image/" + item.ProductId },
                }
            };
        }

        public IEnumerable<string> Update(ProductDetails model)
        {
            if (model.Price < 0)
            {
                return new string[]
                {
                    "Price must be greter than zero"
                };
            }

            var item = db.Products.FirstOrDefault(x => x.ProductId == model.Id);
            if (item == null)
            {
                return new string[]
                {
                    "Invalid Id"
                };
            }

            item.ProductName = model.Name;
            item.UnitPrice = model.Price;

            db.SaveChanges();

            return Enumerable.Empty<string>();
        }
    }
}
