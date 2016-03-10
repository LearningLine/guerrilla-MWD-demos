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

        public IEnumerable<ProductSummary> GetAll()
        {
            return db.Products.Select(x => new ProductSummary
            {
                Id = x.ProductId,
                Name = x.ProductName
            });
        }

        internal ProductDetails GetDetails(int id)
        {
            var item = db.Products.FirstOrDefault(x => x.ProductId == id);
            if (item == null) return null;

            return new ProductDetails
            {
                Id = item.ProductId,
                Name = item.ProductName,
                Price = item.UnitPrice
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
