import { Injectable } from '@angular/core';
import { Booking } from './bookings.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private $bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: '1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: '1',
    },
  ];

  get bookings() {
    return [...this.$bookings];
  }
}
