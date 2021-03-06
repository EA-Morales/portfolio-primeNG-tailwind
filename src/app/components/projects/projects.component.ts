import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  proyectos = [
    {
      title: 'Card Title 1',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/images/portfolio.png',
    },
    {
      title: 'Card Title 2',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/images/foto.png',
    },
    {
      title: 'Card Title 3',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
    {
      title: 'Card Title 4',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  showme: boolean = false;

  toogle() {
    this.showme = !this.showme;
  }
}
