using AlkmaarseRestaurants.Models.Restaurant;
using System.Collections.Generic;

namespace AlkmaarseRestaurants.DummyData
{
    public class RestaurantTypeDummyData
    {
        public List<RestaurantTypeModel> RestaurantTypes { get; set; }

        public RestaurantTypeDummyData()
        {
            this.RestaurantTypes = new List<RestaurantTypeModel>
            {
                new RestaurantTypeModel
                {
                    Id = 0,
                    Name = "fast-food",
                    DisplayName = "Fast food"
                },
                new RestaurantTypeModel
                {
                    Id = 1,
                    Name = "chinese",
                    DisplayName = "Chinese"
                },
                new RestaurantTypeModel
                {
                    Id = 2,
                    Name = "turks",
                    DisplayName = "Turks"
                },
                new RestaurantTypeModel
                {
                    Id = 3,
                    Name = "wok",
                    DisplayName = "Wok"
                }
            };
        }
    }
}
