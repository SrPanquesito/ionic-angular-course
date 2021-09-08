import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  ActionSheetController,
  ModalController,
  NavController,
} from '@ionic/angular';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (!params.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(params.get('placeId'));
    });
  }

  onBookPlace() {
    //this.navCtrl.navigateBack(['/places/tabs/discover']);
    this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel',
          role: 'destructive'
        }
      ],
    })
    .then(el => {
      el.present();
    });
  }

  openBookingModal(mode: 'select'|'random') {
    console.log(mode);
    this.modalCtrl
      .create({
        component: CreateBookingPage,
        componentProps: { selectedPlace: this.place },
      })
      .then((elem) => {
        elem.present();
        return elem.onDidDismiss();
      })
      .then((resData) => {
        if (resData.role === 'confirm') {
          console.log('Booked!');
        }
      });
  }

}
