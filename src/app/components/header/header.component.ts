import { Component, OnInit } from '@angular/core';
import { IonTabs,IonToolbar,IonMenuButton, IonMenu, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonTitle, IonContent, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonButtons, IonContent,IonMenuButton, IonTitle, IonHeader, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonMenu,IonToolbar],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
