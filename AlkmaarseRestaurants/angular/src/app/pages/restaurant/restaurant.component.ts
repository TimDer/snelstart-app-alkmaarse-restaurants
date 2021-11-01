import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantContactModal } from 'src/app/shared/models/Restaurant/RestaurantContactModal';
import { RestaurantModel } from 'src/app/shared/models/Restaurant/RestaurantModel';
import { RestaurantApiService } from 'src/app/shared/services/apis/restaurant/restaurant-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantMenuItemModel } from 'src/app/shared/models/Restaurant/RestaurantMenuItemModel';

declare let $: any;

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  public Restaurant: RestaurantModel = new RestaurantModel();
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
      this.Restaurant = data;
    });
  }

  public bootstrapTooltipRestaurantTypeTitle(name: string, description: string): string {
    return  "<p class='margin-bottom-5px'>" + name + "</p>" + 
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
