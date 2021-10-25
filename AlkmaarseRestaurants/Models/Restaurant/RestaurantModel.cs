using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlkmaarseRestaurants.Models.Restaurant
{
    public class RestaurantModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string StreetName { get; set; }
        public string StreetNumber { get; set; }
        public string PostalCode { get; set; }
        public string ImageLogo { get; set; }
        public RestaurantCategoryModel RestaurantType { get; set; }
        public RestaurantInfoModel RestaurantInfo { get; set; }
        public List<RestaurantMenuItemModel> RestaurantMenu { get; set; }
    }
}
