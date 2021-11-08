import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantContactModal } from 'src/app/shared/models/Restaurant/RestaurantContactModal';
import { RestaurantModel } from 'src/app/shared/models/Restaurant/RestaurantModel';
import { RestaurantApiService } from 'src/app/shared/services/apis/restaurant/restaurant-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantMenuItemCategoryModel } from 'src/app/shared/models/Restaurant/RestaurantMenuItemCategoryModel';

declare let $: any;

class ReadonlyRawRestaurantData {
  public readonly RestaurantData: RestaurantModel = new RestaurantModel();

  public getRestaurantData(): RestaurantModel {
    return this.RestaurantData;
  }

  constructor(setRestaurant: RestaurantModel) {
    this.RestaurantData = setRestaurant;
  }
}

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  public RawRestaurant: ReadonlyRawRestaurantData = new ReadonlyRawRestaurantData(new RestaurantModel());
  public Restaurant: RestaurantModel = new RestaurantModel();
  public RestaurantMenuItemCategories: Array<RestaurantMenuItemCategoryModel> = [];
  public MessageSent: boolean = false;

  public RestaurantContactForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    subject: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required]),
    message: new FormControl("", Validators.required)
  });

  constructor(
    private route: ActivatedRoute,
    private restaurantApiService: RestaurantApiService
  ) { }

  ngOnInit(): void {
    this.restaurantApiService.getOwnRestaurant(this.route.snapshot.paramMap.get("id") || "").subscribe(data => {
      this.RawRestaurant = new ReadonlyRawRestaurantData(this.deepCopy<RestaurantModel>(data));
      this.Restaurant = this.deepCopy<RestaurantModel>(data);
    });

    this.restaurantApiService.GetRestaurantMenuCategories().subscribe(data => {
      const AddAllCategory = new RestaurantMenuItemCategoryModel();
      AddAllCategory.name = "all";
      AddAllCategory.displayName = "Alles";
      data.unshift(AddAllCategory);
      this.RestaurantMenuItemCategories = data;
    });
  }

  public deepCopy<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
  }

  public bootstrapRestaurantMenuFilter(element: HTMLElement): void {
    if (element.matches(".show")) {
      element.classList.remove("show");
    }
    else {
      $(element).dropdown("toggle");
    }
  }

  public strToNumber(num: string): number {
    return Number(num);
  }

  public menuFilterOnChange(name: string, price: number, cat: string): void {
    this.Restaurant.restaurantMenu = this.RawRestaurant.getRestaurantData().restaurantMenu.filter(filter => {
      let allowName: boolean  = true;
      let allowPrice: boolean = true;
      let allowCat: boolean   = true;

      if (name !== "" && !filter.name.toLowerCase().includes(name.toLowerCase())) {
        allowName = false;
      }

      if (price.toString() !== "0" && (price < filter.price)) {
        allowPrice = false;
      }

      if (cat !== filter.menuCategory.name && cat !== "all") {
        allowCat = false;
      }

      return allowName && allowPrice && allowCat;
    });
  }

  public bootstrapTooltipRestaurantTypeTitle(name: string, description: string): string {
    return  "<p class='margin-bottom-5'>" + name + "</p>" + 
            "<div>" + description + "</div>";
  }

  public onRestaurantSubmit(data: RestaurantContactModal, rawData: any) {
    if (this.onValidForm()) {
      $("#restaurantContactModal").modal("hide");

      setTimeout(() => {
        this.MessageSent = true;
      }, 500);

      rawData.reset();
    }
  }

  private onValidForm(): any {
    const name = this.RestaurantContactForm.get("name")?.valid;
    const subject = this.RestaurantContactForm.get("subject")?.valid;
    const email = this.RestaurantContactForm.get("email")?.valid;
    const message = this.RestaurantContactForm.get("message")?.valid;

    return name && subject && email && message;
  }

}
