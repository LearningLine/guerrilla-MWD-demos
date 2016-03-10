using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Http;

namespace WebApi
{
    public class TestController : ApiController
    {
        [Authorize]
        [Route("api/test")]
        public IHttpActionResult Get()
        {
            var user = (ClaimsPrincipal)User;
            var claims = user.Claims.Select(x => x.Type + ":" + x.Value);
            return Json(claims.ToArray());
        }
    }
}