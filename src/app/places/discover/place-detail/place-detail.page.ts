import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingPage } from 'src/app/bookings/create-booking/create-booking.page';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private router: Router, private route: ActivatedRoute,
    private navCtrl: NavController, private placesService: PlacesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(!params.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(params.get('placeId'));
    });
  }

  onBookPlace() {
    //this.navCtrl.navigateBack(['/places/tabs/discover']);
    this.modalCtrl.create({component: CreateBookingPage, componentProps: {selectedPlace: this.place}})
      .then(elem => {
        elem.present();
        return elem.onDidDismiss();
      })
      .then(resData => {
        if (resData.role === 'confirm') {
          console.log('Booked!');
        }
      });
  }

}
