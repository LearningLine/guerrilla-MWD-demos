using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Route("api/brock")]
        public IActionResult Ajax()
        {
            return new ObjectResult(new
            {
                name = "Brock",
                age = 100
            });
        }


    }
}
