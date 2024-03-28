import { Component } from '@angular/core';
import { IonHeader,IonCard, IonCardContent, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonIcon, IonList, IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../components/header/header.component';
import { addIcons } from 'ionicons';
import { bagAddOutline } from 'ionicons/icons';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonNote, IonLabel, IonItem, IonList, IonIcon, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent,IonCard,IonCardContent, ExploreContainerComponent,HeaderComponent],
})
export class Tab1Page {
  balence: string = "$5,7890,20";
  
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
