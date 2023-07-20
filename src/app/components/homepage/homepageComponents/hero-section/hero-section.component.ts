import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  nameCard: string = 'Visa';

  ngOnInit() {
    setInterval(() => {
      this.updateTitle();
    }, 1000);
  }

  updateTitle() {
    const titles: string[] = ['MasterCard', ' Diners', ' JCB', 'Maestro'];
    const randomIndex: number = Math.floor(Math.random() * titles.length);
    this.nameCard = titles[randomIndex];
  }
}
