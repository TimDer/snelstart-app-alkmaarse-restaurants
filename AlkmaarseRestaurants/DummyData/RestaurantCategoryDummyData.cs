using AlkmaarseRestaurants.Models.Restaurant;
using System.Collections.Generic;

namespace AlkmaarseRestaurants.DummyData
{
    public class RestaurantCategoryDummyData
    {
        public List<RestaurantCategoryModel> RestaurantCategories { get; set; }

        public RestaurantCategoryDummyData()
        {
            this.RestaurantCategories = new List<RestaurantCategoryModel>
            {
                new RestaurantCategoryModel
                {
                    Id = 0,
                    Name = "fast-food",
                    DisplayName = "Fast food"
                },
                new RestaurantCategoryModel
                {
                    Id = 1,
                    Name = "chinese",
                    DisplayName = "Chinese"
                },
                new RestaurantCategoryModel
                {
                    Id = 2,
                    Name = "turks",
                    DisplayName = "Turks"
                },
                new RestaurantCategoryModel
                {
                    Id = 3,
                    Name = "wok",
                    DisplayName = "Wok"
                }
            };
        }
    }
}
