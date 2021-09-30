﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlkmaarseRestaurants.Models
{
    public class RestaurantModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string StreetName { get; set; }
        public int StreetNumber { get; set; }
        public string ImageLogo { get; set; }
        public string RestaurantType { get; set; }
    }
}
