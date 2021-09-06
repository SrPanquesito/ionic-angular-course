/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private placesArr: Place[] = [
    new Place('1', 'Manhattan Mansion', 'In the heart of NY City', 'https://www.nycgo.com/images/itineraries/32171/20180429-soc-fb-sohoshops__facebook.jpg', 149.99),
    new Place('2', 'Amour Le Something', 'Romantic place in Paris', 'https://pea-7f65.kxcdn.com/img/image_db/paris_shopping_cire_trudon_facade-942.jpg', 99.99),
    new Place('3', 'The Foggy Palace', 'Not your avarage city trip!', 'https://i.pinimg.com/originals/9c/88/44/9c8844b217bdb6c17db14f51ad2e51a5.jpg', 135.00)
  ];

  constructor() { }

  get places() {
    return [...this.placesArr];
  }
}
