using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlkmaarseRestaurants.Models.Restaurant
{
    public class RestaurantMenuItemModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public RestaurantMenuItemCategoryModel MenuCategory { get; set; }
    }
}
