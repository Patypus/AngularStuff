using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppTest.Controllers
{
    public class ApiController : Controller
    {
        public JsResult GetAnimalsList()
        {
            var results = new List<AnimalViewModel>
            {
                new AnimalViewModel { Id = 1, Name = "Platypus" },
                new AnimalViewModel { Id = 2, Name = "Narwhal" },
                new AnimalViewModel { Id = 3, Name = "Leopard" },
                new AnimalViewModel { Id = 4, Name = "Hippo" },
                new AnimalViewModel { Id = 5, Name = "Octopus" },
            };
            return new JsResult(results, JsonBehavior.AllowGet);
        }
    }
}