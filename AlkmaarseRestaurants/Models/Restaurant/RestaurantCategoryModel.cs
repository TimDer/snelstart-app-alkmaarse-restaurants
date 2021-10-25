using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlkmaarseRestaurants.Models.Restaurant
{
    public class RestaurantCategoryModel
    {
        public int Id { get; set; }


        private string _Name { get; set; }
        public string Name
        {
            get
            {
                return _Name;
            }
            set
            {
                this._Name = value
                    .ToLower()
                    .Replace(" ", "-");
            }
        }


        private string _DisplayName { get; set; }
        public string DisplayName {
            get
            {
                return _DisplayName;
            }
            set
            {
                this._DisplayName = char.ToUpper(value[0]) + value.Substring(1);
            }
        }
    }
}
