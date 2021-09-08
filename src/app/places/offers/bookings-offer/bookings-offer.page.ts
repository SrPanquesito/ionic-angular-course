import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-bookings-offer',
  templateUrl: './bookings-offer.page.html',
  styleUrls: ['./bookings-offer.page.scss'],
})

// Bookings other people have made to our places
export class BookingsOfferPage implements OnInit {

  place: Place;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (!params.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlace(params.get('placeId'));
    });
  }

}
