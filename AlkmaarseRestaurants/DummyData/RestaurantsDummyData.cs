using AlkmaarseRestaurants.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlkmaarseRestaurants.DummyData
{
    public class RestaurantsDummyData
    {
        public RestaurantModel[] Restaurants { get; set; }

        public RestaurantsDummyData()
        {
            Restaurants = new RestaurantModel[] {
                new RestaurantModel
                {
                    ID = 0,
                    Name = "Het aapen restaurant",
                    Address = "Apeldoorn",
                    StreatName = "Wilslaan",
                    Number = 21,
                    Img = "/assets/aap.jpg",
                    Type = "Fast Foot"
                },
                new RestaurantModel
                {
                    ID = 1,
                    Name = "Restaurant de crêpe",
                    Address = "Alkmaar",
                    StreatName = "Pannekoekenstraat",
                    Number = 12,
                    Img = "/assets/Pannekoeken.jpg",
                    Type = "Pannekoeken"
                },
                new RestaurantModel
                {
                    ID = 2,
                    Name = "Naam 1",
                    Address = "Address 1",
                    StreatName = "Straat 1",
                    Number = 22,
                    Img = "/assets/foto1.jpg",
                    Type = "Type 1"
                },
                new RestaurantModel
                {
                    ID = 3,
                    Name = "Naam 2",
                    Address = "Address 2",
                    StreatName = "Straat 2",
                    Number = 54,
                    Img = "/assets/foto2.jpg",
                    Type = "Type 2"
                }
            };
        }
    }
}
