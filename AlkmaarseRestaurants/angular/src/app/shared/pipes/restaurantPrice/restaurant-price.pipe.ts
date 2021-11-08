import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restaurantPrice'
})
export class RestaurantPricePipe implements PipeTransform {

  transform(value: string): string {
    const priceArray = value.toString().split(".");

    let newData = "";
    if (priceArray[1] === "") {
      newData = priceArray[0];
    }
    else if (
      priceArray[1][0] !== undefined,
      priceArray[1][1] !== undefined
    ) {
      newData = priceArray[0] + "." + priceArray[1];
    }
    else if (
      priceArray[1][0] !== undefined,
      priceArray[1][1] === undefined
    ) {
      newData = priceArray[0] + "." + priceArray[1] + "0";
    }

    return `€ ${newData}`;
  }

}