import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  idVideos = [
    {
      id: 'https://www.youtube.com/embed/xtp_DuPxo9Q',
      title: 'TypeScript - Tutorial desde CERO en Español ',
    },
    {
      id: 'https://www.youtube.com/embed/KknN6-HKhiE',
      title:
        'Recomendaciones para ser Freelance en el mundo de la programación',
    },
    {
      id: 'https://www.youtube.com/embed/d9y0l7yY404',
      title:
        'Mejorando el Powershell de Windows con OhmyPosh, Windows Terminal y NerdFonts',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
