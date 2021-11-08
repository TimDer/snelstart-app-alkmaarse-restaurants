using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlkmaarseRestaurants.Models.Restaurant
{
    public class RestaurantMenuItemCategoryModel
    {
        private string _Name { get; set; }
        public string Name {
            get
            {
                return this._Name;
            }
            set
            {
                this._Name = value.ToLower();
            }
        }

        private string _DisplayName { get; set; }
        public string DisplayName {
            get
            {
                return this._DisplayName;
            }
            set
            {
                this._DisplayName = char.ToUpper(value[0]) + value.Substring(1);
            }
        }
    }
}
