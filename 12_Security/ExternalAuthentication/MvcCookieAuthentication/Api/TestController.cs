using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Http;

namespace MvcCookieAuthentication.Api
{
    public class TestController : ApiController
    {
        // ~/api/test
        [Route("test")]
        [Authorize]
        //[Policy("customer")]
        public IHttpActionResult Get()
        {
            var cp = (ClaimsPrincipal)User;
            var claims =
                from c in cp.Claims
                select c.Type + ":" + c.Value;

            return Json(claims.ToArray());
        }
    }
}