using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;

namespace MvcCookieAuthentication.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        //[Authorize]
        public ActionResult Index()
        {
            //User.Identity.IsAuthenticated
            var cp = (ClaimsPrincipal)User;
            //var claim = cp.Claims.First();
            //claim.Type;
            //claim.Value;

            return View();
        }

        public ActionResult Login()
        {
            var ctx = Request.GetOwinContext();
            var props = new AuthenticationProperties
            {
                RedirectUri = "/Home/Index"
            };
            ctx.Authentication.Challenge(props, "oidc");

            return new HttpUnauthorizedResult();
        }
        
        //[ValidateAntiForgeryToken]
        //[HttpPost]
        //public ActionResult Login(string username)
        //{
        //    var claims = new Claim[]{
        //        new Claim("username", username),
        //        new Claim("name", "Brock Allen"),
        //        new Claim("email", "brockallen@gmail.com"),
        //        new Claim("role", "Dev"),
        //        new Claim("role", "Admin"),
        //    };
        //    var ci = new ClaimsIdentity(claims, "Cookie", "name", "role");

        //    var ctx = Request.GetOwinContext();
        //    var props = new AuthenticationProperties
        //    {
        //        //IsPersistent = true,
        //        //ExpiresUtc = DateTimeOffset.UtcNow.AddDays(14)
        //    };
        //    ctx.Authentication.SignIn(props, ci);

        //    //Response.Cookies.Add("foo", "bar");
            
        //    return Redirect("~/Home/Index");
        //}

        public ActionResult Logout()
        {
            var ctx = Request.GetOwinContext();
            ctx.Authentication.SignOut("Cookie");
            return Redirect("~/Home/Index");
        }

        //public ActionResult Google()
        //{
        //    var ctx = Request.GetOwinContext();
        //    var props = new AuthenticationProperties
        //    {
        //        RedirectUri = "/Home/Index"
        //    };
        //    ctx.Authentication.Challenge(props, "Google");

        //    return new HttpUnauthorizedResult();
        //}
    }
}