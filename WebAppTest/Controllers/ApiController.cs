using System.Collections.Generic;
using System.Web.Mvc;
using WebAppTest.Models;

namespace WebAppTest.Controllers
{
    public class ApiController : Controller
    {
        [HttpGet]
        public JsonResult GetAnimalsList()
        {
            var results = new List<AnimalViewModel>
            {
                new AnimalViewModel { Id = 1, Name = "Platypus" },
                new AnimalViewModel { Id = 2, Name = "Narwhal" },
                new AnimalViewModel { Id = 3, Name = "Leopard" },
                new AnimalViewModel { Id = 4, Name = "Hippo" },
                new AnimalViewModel { Id = 5, Name = "Octopus" },
            };
            return Json(results, JsonRequestBehavior.AllowGet);
        }
    }
}