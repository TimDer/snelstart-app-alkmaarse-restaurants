using AlkmaarseRestaurants.Models.Restaurant;
using System.Collections.Generic;

namespace AlkmaarseRestaurants.DummyData
{
    public class RestaurantsDummyData
    {
        public List<RestaurantModel> Restaurants { get; set; }

        public RestaurantsDummyData()
        {
            Restaurants = new List<RestaurantModel> {
                new RestaurantModel
                {
                    Id = 0,
                    Name = "Het aapen restaurant",
                    Address = "Apeldoorn",
                    StreetName = "Wilslaan",
                    StreetNumber = 21,
                    ImageLogo = "/assets/imagesRestaurantLogos/aap.jpg",
                    RestaurantType = "Fast Foot",
                    RestaurantInfo = new RestaurantInfoModel
                    {
                        Description = "Dit is het aapen restaurant van de aapen hier wordt je door aapen geholpen"
                    },
                    RestaurantMenu = new List<RestaurantMenuItemModel>
                    {
                        new RestaurantMenuItemModel
                        {
                            Name = "Brootje hamburger",
                            Description = "Een lekker brootje hamburger gemaakt door de aapen",
                            Price = 38.45m
                        },
                        new RestaurantMenuItemModel
                        {
                            Name = "Brootje kaas",
                            Description = "Een lekker brootje kaas gemaakt door de aapen",
                            Price = 38.45m
                        }
                    }
                },
                new RestaurantModel
                {
                    Id = 1,
                    Name = "Restaurant de crêpe",
                    Address = "Alkmaar",
                    StreetName = "Pannekoekenstraat",
                    StreetNumber = 12,
                    ImageLogo = "/assets/imagesRestaurantLogos/Pannekoeken.jpg",
                    RestaurantType = "Pannekoeken",
                    RestaurantInfo = new RestaurantInfoModel
                    {
                        Description = "Een groot manekoeken restaurant"
                    },
                    RestaurantMenu = new List<RestaurantMenuItemModel>
                    {
                        new RestaurantMenuItemModel
                        {
                            Name = "Pannenkoek met stroop",
                            Description = "Een pannenkoek met stroop",
                            Price = 12.25m
                        }
                    }
                },
                new RestaurantModel
                {
                    Id = 2,
                    Name = "Naam 1",
                    Address = "Address 1",
                    StreetName = "Straat 1",
                    StreetNumber = 22,
                    ImageLogo = "/assets/imagesRestaurantLogos/foto1.jpg",
                    RestaurantType = "Type 1",
                    RestaurantInfo = new RestaurantInfoModel
                    {
                        Description = "Description 1"
                    },
                    RestaurantMenu = new List<RestaurantMenuItemModel>
                    {
                        new RestaurantMenuItemModel
                        {
                            Name = "Name 1",
                            Description = "Description 1",
                            Price = 57.32m
                        }
                    }
                },
                new RestaurantModel
                {
                    Id = 3,
                    Name = "Naam 2",
                    Address = "Address 2",
                    StreetName = "Straat 2",
                    StreetNumber = 54,
                    ImageLogo = "/assets/imagesRestaurantLogos/foto2.jpg",
                    RestaurantType = "Type 2",
                    RestaurantInfo = new RestaurantInfoModel
                    {
                        Description = "Description 2"
                    },
                    RestaurantMenu = new List<RestaurantMenuItemModel>
                    {
                        new RestaurantMenuItemModel
                        {
                            Name = "Name 2",
                            Description = "Description 2",
                            Price = 5769.45m
                        }
                    }
                }
            };
        }
    }
}
