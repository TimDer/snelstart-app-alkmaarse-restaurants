using AlkmaarseRestaurants.DummyData;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace AlkmaarseRestaurants.Controllers
{
    [Route("api/{controller}/{action=index}")]
    [Route("api/{controller}/{action=index}/{id}")]
    public class RestaurantController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            var data = new RestaurantsDummyData();
            return Json(data.Restaurants);
        }

        [HttpGet]
        public IActionResult selectOwn(int id)
        {
            var data = new RestaurantsDummyData();
            if (data.Restaurants.Any(item => item.ID == id))
            {
                return Json(data.Restaurants[id]);
            }

            return StatusCode(404);
        }
    }
}
