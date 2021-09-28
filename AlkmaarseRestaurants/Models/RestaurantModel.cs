using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlkmaarseRestaurants.Models
{
    public class RestaurantModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string StreatName { get; set; }
        public int Number { get; set; }
        public string Img { get; set; }
        public string Type { get; set; }
    }
}
