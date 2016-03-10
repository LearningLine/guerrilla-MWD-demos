using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
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

        public async Task<ActionResult> CallApi()
        {
            var user = (ClaimsPrincipal)User;
            var access_token = user.FindFirst("access_token")?.Value;

            var url = "http://localhost:25159/api/test";

            var client = new HttpClient();
            client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", access_token);
            var response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                ViewData["result"] = await response.Content.ReadAsStringAsync();
            }
            else
            {
                ViewData["result"] = "status code: " + response.StatusCode;
            }

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