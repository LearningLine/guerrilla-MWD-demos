using ConsoleApplication1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace ConsoleApplication1
{
    // URLs|methods
    // GET, POST, PUT, DELETE, PATCH
    // <a href='revert?v=12'>revert this change</a>
    [RoutePrefix("api/products")]
    public class ProductsController : ApiController
    {
        NorthwindService _service = new NorthwindService();

        //[HttpGet]
        // ~/api/products
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(_service.GetAll(Request.RequestUri.Scheme + "://" + Request.RequestUri.Authority));
            //return Ok(new
            //{
            //    foo = 100,
            //    bar = "whatever"
            //});
        }

        // ~/api/products/5
        [Route("{id:int}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var details = _service.GetDetails(id, Request.RequestUri.Scheme + "://" + Request.RequestUri.Authority);
            if (details == null)
            {
                //var resp = Request.CreateResponse(HttpStatusCode.NotFound, new { error="duh, not here" });
                //return ResponseMessage(resp);
                return NotFound();
                //return StatusCode(HttpStatusCode.NotFound);
            }

            return Ok(details);
        }

        // ~/api/products
        [Route("{id:int}")]
        [HttpPut]
        public IHttpActionResult Put([FromUri] int id, [FromBody] ProductDetails model)
        {
            var errors = _service.Update(model);
            if (errors != null && errors.Any())
            {
                var resp = Request.CreateResponse(HttpStatusCode.BadRequest, new { errors = errors });
                return ResponseMessage(resp);
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
