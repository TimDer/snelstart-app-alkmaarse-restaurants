using AlkmaarseRestaurants.Models.Restaurant;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlkmaarseRestaurants.DummyData
{
    public class RestaurantMenuItemCategoryData
    {
        public List<RestaurantMenuItemCategoryModel> RestaurantMenuItemCategories { get; set; }

        public RestaurantMenuItemCategoryData()
        {
            this.RestaurantMenuItemCategories = new List<RestaurantMenuItemCategoryModel>
            {
                new RestaurantMenuItemCategoryModel
                {
                    Name = "lunch",
                    DisplayName = "Lunch"
                },
                new RestaurantMenuItemCategoryModel
                {
                    Name = "brootjes",
                    DisplayName = "brootjes"
                },
                new RestaurantMenuItemCategoryModel
                {
                    Name = "ontbijt",
                    DisplayName = "Ontbijt"
                },
                new RestaurantMenuItemCategoryModel
                {
                    Name = "vegetaries",
                    DisplayName = "vegetaries"
                }
            };
        }
    }
}
