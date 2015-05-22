using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class HomeController : Controller
    {
        private IFoo _foo;

        public HomeController(IFoo foo)
        {
            _foo = foo;
        }

        //[Route("foo-bar/{id:int}")]
        public IActionResult Index()
        {
            var vm = new SomeModel()
            {
                Name = "Brock"
            };
            //return new ObjectResult(vm);
            return View("Index", vm);
        }

        [HttpPost]
        public IActionResult Post([FromBody]SomeModel model)
        {
            //return HttpUnauthorizedResult();
            //return HttpNotFound();
            return new NoContentResult();
        }

    }
}
