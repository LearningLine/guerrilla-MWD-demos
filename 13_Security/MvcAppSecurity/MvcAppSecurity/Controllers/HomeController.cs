using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;

namespace MvcAppSecurity.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [Authorize]
        public ActionResult Secure()
        {
            var user = (ClaimsPrincipal)User;

            return View();
        }

        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(string username)
        {
            var claims = new Claim[]
            {
                new Claim("name", "Brock Allen"),
                new Claim("email", "BrockAllen@gmail.com"),
                new Claim("sub", "123"),
                new Claim("role", "Admin"),
                new Claim("role", "Developer"),
            };
            var id = new ClaimsIdentity(claims, "cookies");

            var ctx = Request.GetOwinContext();
            ctx.Authentication.SignIn(id);

            return Redirect("~/home/secure");
        }
    }
}