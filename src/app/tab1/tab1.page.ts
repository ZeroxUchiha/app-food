import { CUSTOM_ELEMENTS_SCHEMA, OnInit,  Component } from '@angular/core';
import { IonHeader,IonCard, IonCardContent,IonicSlides, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonIcon, IonList, IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../components/header/header.component';
import { addIcons } from 'ionicons';
import { bagAddOutline } from 'ionicons/icons';
import { register} from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonNote, IonLabel, IonItem, IonList, IonIcon, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent,IonCard,IonCardContent, ExploreContainerComponent,HeaderComponent],
})
export class Tab1Page  {

  swiperModules = [IonicSlides];

   balances: string[] = [
    "$5,7890,20", // Balance for account 1
    "$3,210,50",  // Balance for account 2
    "$10,000,00"  // Balance for account 3
    
  ];
  
  rates: { currency: string, value: number }[] = [
    { currency: 'USD', value: 1.0 }, // 1 USD = 1 USD (base currency)
    { currency: 'EUR', value: 0.85 }, // Assuming 1 USD = 0.85 EUR
    { currency: 'GBP', value: 0.72 }, // Assuming 1 USD = 0.72 GBP
    // Add more currencies and their rates as needed
  ];
  constructor() {

    addIcons({bagAddOutline,});
  }
}
