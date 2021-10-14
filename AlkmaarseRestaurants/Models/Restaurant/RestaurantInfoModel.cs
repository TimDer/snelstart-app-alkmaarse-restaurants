using System.Collections.Generic;

namespace AlkmaarseRestaurants.Models.Restaurant
{
    public class RestaurantInfoModel
    {
        public string Description { get; set; }
        public string PhoneNumber { get; set; }
        public string MobilePhoneNumber { get; set; }
        public string Website { get; set; }
        public List<string> RestaurantTypes { get; set; }
    }
}
