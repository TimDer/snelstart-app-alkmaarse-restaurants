import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantFavoritesService {
  
  private localStorageKey: string = "favouriteRestaurant";
  private favouriteRestaurant: Array<number> = [];

  private setLocalStorage(): void {
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(this.favouriteRestaurant));
  }

  public IsInFavourites(id: number): boolean {
    let returnBool = false;

    this.favouriteRestaurant.forEach((value) => {
      if (value === id) {
        returnBool = true;
      }
    });

    return returnBool;
  }
  
  public AddFavourite(id: number): void {
    if (!this.IsInFavourites(id)) {
      this.favouriteRestaurant.push(id);
      this.setLocalStorage();
    }
  }

  public removeFavourite(id: number) {
    const oldArray = this.favouriteRestaurant;
    this.favouriteRestaurant = oldArray.filter(filter => {
      if (filter === id) {
        return false;
      }

      return true;
    });
    this.setLocalStorage();
  }

  constructor() {
    const localStorageString = window.localStorage.getItem(this.localStorageKey);
    if (localStorageString !== null) {
      this.favouriteRestaurant = JSON.parse(localStorageString);
    }
  }
}
