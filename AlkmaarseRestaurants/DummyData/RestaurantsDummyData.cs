using AlkmaarseRestaurants.Models.Restaurant;
using System.Collections.Generic;

namespace AlkmaarseRestaurants.DummyData
{
    public class RestaurantsDummyData
    {
        public List<RestaurantModel> Restaurants { get; set; }

        public RestaurantsDummyData()
        {
            var restaurantTypes = new RestaurantCategoryDummyData();
            var menuItemData = new RestaurantMenuItemCategoryData();

            Restaurants = new List<RestaurantModel> {
                new RestaurantModel
                {
                    Id = 0,
                    Name = "Turfmarkt Alkmaar",
                    Address = "Alkmaar",
                    StreetName = "Turfmarkt",
                    StreetNumber = "11-23",
                    PostalCode = "1813SC",
                    ImageLogo = "/assets/imagesRestaurantLogos/Turfmarkt-Alkmaar.jpg",
                    RestaurantType = restaurantTypes.RestaurantCategories[0],
                    RestaurantInfo = new RestaurantInfoModel
                    {
                        Description = "Een kopje koffie met een krantje, gezellig lunchen met vriendinnen of een zakelijke bespreking? Een hapje eten voordat je de stad ingaat of uitgebreid dineren met de familie? Bedrijfsborrel, receptie of vergadering? Met een terras gelegen aan het water op loopafstand van het centrum, een heerlijke plek om de dag te beginnen of af te sluiten! Door de prachtige locatie van Turfmarkt zijn we van alle ‘markten’ thuis! Parkeren is geen probleem, naast Turfmarkt bevindt zich parkeergarage Schelphoek.",
                        PhoneNumber = "072 531 4000",
                        MobilePhoneNumber = "Geen",
                        Website = "https://turfmarkt-alkmaar.nl/diner/",
                        RestaurantTypes = new List<RestaurantTypeModel>
                        {
                            new RestaurantTypeModel()
                            {
                                Name = "Fast food",
                                Description = "In dit restaurant kun je fast food kopen",
                                CssClass = "fas fa-hamburger"
                            }
                        }
                    },
                    RestaurantMenu = new List<RestaurantMenuItemModel>
                    {
                        new RestaurantMenuItemModel
                        {
                            Id = 0,
                            Name = "Croissant",
                            Description = "roomboter | jam",
                            Price = 3.50m,
                            MenuCategory = menuItemData.RestaurantMenuItemCategories[1]
                        },
                        new RestaurantMenuItemModel
                        {
                            Id = 1,
                            Name = "Croissant",
                            Description = "Beemsterkaas",
                            Price = 3.50m,
                            MenuCategory = menuItemData.RestaurantMenuItemCategories[1]
                        },
                        new RestaurantMenuItemModel
                        {
                            Id = 2,
                            Name = "Acaï bowl",
                            Description = "granola | banaan | kiwi",
                            Price = 6.40m,
                            MenuCategory = menuItemData.RestaurantMenuItemCategories[2]
                        },
                    }
                },
                new RestaurantModel
                {
                    Id = 1,
                    Name = "De Eendracht Alkmaar in ´t IJkgebouw",
                    Address = "Alkmaar",
                    StreetName = "Alckmariapad",
                    StreetNumber = "2",
                    PostalCode = "1811ML",
                    ImageLogo = "/assets/imagesRestaurantLogos/De-Eendracht-Alkmaar-in-t-IJkgebouw.jpg",
                    RestaurantType = restaurantTypes.RestaurantCategories[2],
                    RestaurantInfo = new RestaurantInfoModel
                    {
                        Description = "Van IJkkantoor tot poppodium en van slooppand tot prachtige horecazaak; 't IJkgebouw is doorweven van historie. Bij De Eendracht in ’t IJkgebouw kan je ieder moment van de dag binnenwaaien in onze huiskamer, waar je betaalbaar en goed kunt eten. We noemen De Eendracht wel eens een buurtcafé en toprestaurant, waar je binnen een ongedwongen sfeer geniet van klassieke brasserie gerechten. Zon of regen, hier wil je eigenlijk niet meer weg!",
                        PhoneNumber = "Geen",
                        MobilePhoneNumber = "+31 725 826 036",
                        Website = "https://www.deeendracht-alkmaar.nl",
                        RestaurantTypes = new List<RestaurantTypeModel>
                        {
                            new RestaurantTypeModel()
                            {
                                Name = "Geen",
                                Description = "",
                                CssClass = "fas fa-hamburger"
                            }
                        }
                    },
                    RestaurantMenu = new List<RestaurantMenuItemModel>
                    {
                        new RestaurantMenuItemModel
                        {
                            Id = 0,
                            Name = "Croissant",
                            Description = "Met boter en een bramenjam met steranijs",
                            Price = 3.75m,
                            MenuCategory = menuItemData.RestaurantMenuItemCategories[0]
                        },
                        new RestaurantMenuItemModel
                        {
                            Id = 1,
                            Name = "Hangop",
                            Description = "Met granola en vers fruit",
                            Price = 7.50m,
                            MenuCategory = menuItemData.RestaurantMenuItemCategories[1]
                        },
                        new RestaurantMenuItemModel
                        {
                            Id = 2,
                            Name = "Kalfskroketten",
                            Description = "Met brood en mosterd",
                            Price = 9.50m,
                            MenuCategory = menuItemData.RestaurantMenuItemCategories[2]
                        },
                    }
                },
                new RestaurantModel
                {
                    Id = 2,
                    Name = "Proeflokaal Bregje Alkmaar",
                    Address = "Alkmaar",
                    StreetName = "Paardenmarkt",
                    StreetNumber = "4",
                    PostalCode = "1811KH",
                    ImageLogo = "/assets/imagesRestaurantLogos/Proeflokaal-Bregje-Alkmaar.jpg",
                    RestaurantType = restaurantTypes.RestaurantCategories[3],
                    RestaurantInfo = new RestaurantInfoModel
                    {
                        Description = "Van IJkkantoor tot poppodium en van slooppand tot prachtige horecazaak; 't IJkgebouw is doorweven van historie. Bij De Eendracht in ’t IJkgebouw kan je ieder moment van de dag binnenwaaien in onze huiskamer, waar je betaalbaar en goed kunt eten. We noemen De Eendracht wel eens een buurtcafé en toprestaurant, waar je binnen een ongedwongen sfeer geniet van klassieke brasserie gerechten. Zon of regen, hier wil je eigenlijk niet meer weg!",
                        PhoneNumber = "Geen",
                        MobilePhoneNumber = "+31 723 030 402",
                        Website = "https://www.proeflokaalbregje.nl",
                        RestaurantTypes = new List<RestaurantTypeModel>
                        {
                            new RestaurantTypeModel()
                            {
                                Name = "hello",
                                Description = "",
                                CssClass = "fas fa-hamburger"
                            }
                        }
                    },
                    RestaurantMenu = new List<RestaurantMenuItemModel>
                    {
                        new RestaurantMenuItemModel
                        {
                            Id = 0,
                            Name = "Gerookte zalm",
                            Description = "Met saffraanmayonaise, bosui en rucola",
                            Price = 7.00m,
                            MenuCategory = menuItemData.RestaurantMenuItemCategories[0]
                        },
                        new RestaurantMenuItemModel
                        {
                            Id = 1,
                            Name = "Geitenkaas",
                            Description = "Met honing, gekaramelliseerde pecannoten en rucola",
                            Price = 6.00m,
                            MenuCategory = menuItemData.RestaurantMenuItemCategories[1]
                        },
                        new RestaurantMenuItemModel
                        {
                            Id = 2,
                            Name = "Rundvleeskroketten",
                            Description = "2 ambachtelijke rundvleeskroketten",
                            Price = 6.00m,
                            MenuCategory = menuItemData.RestaurantMenuItemCategories[2]
                        },
                    }
                },
            };
        }
    }
}
