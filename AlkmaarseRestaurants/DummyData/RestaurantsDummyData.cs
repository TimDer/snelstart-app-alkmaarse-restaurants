using AlkmaarseRestaurants.Models;

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
                    Id = 0,
                    Name = "Het aapen restaurant",
                    Address = "Apeldoorn",
                    StreetName = "Wilslaan",
                    StreetNumber = 21,
                    ImageLogo = "/assets/imagesRestaurantLogos/aap.jpg",
                    RestaurantType = "Fast Foot"
                },
                new RestaurantModel
                {
                    Id = 1,
                    Name = "Restaurant de crêpe",
                    Address = "Alkmaar",
                    StreetName = "Pannekoekenstraat",
                    StreetNumber = 12,
                    ImageLogo = "/assets/imagesRestaurantLogos/Pannekoeken.jpg",
                    RestaurantType = "Pannekoeken"
                },
                new RestaurantModel
                {
                    Id = 2,
                    Name = "Naam 1",
                    Address = "Address 1",
                    StreetName = "Straat 1",
                    StreetNumber = 22,
                    ImageLogo = "/assets/imagesRestaurantLogos/foto1.jpg",
                    RestaurantType = "Type 1"
                },
                new RestaurantModel
                {
                    Id = 3,
                    Name = "Naam 2",
                    Address = "Address 2",
                    StreetName = "Straat 2",
                    StreetNumber = 54,
                    ImageLogo = "/assets/imagesRestaurantLogos/foto2.jpg",
                    RestaurantType = "Type 2"
                }
            };
        }
    }
}
