import { Component } from '@angular/core';
import { IonHeader,IonCard, IonCardContent, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent,IonCard,IonCardContent, ExploreContainerComponent,HeaderComponent],
})
export class Tab1Page {
  balence: string = "$5,7890,20";
  constructor() {}
}
