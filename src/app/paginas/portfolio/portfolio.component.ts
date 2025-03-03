import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [CommonModule]
})
export class PortfolioComponent {
  proyectos: Proyecto[] = [
    {
      imagen: 'github.png',
      titulo: 'Github',
      descripcion: 'Aqui tenemos un enlace a github, concretamente al repositorio con todos mis projectos personales publicos',
      link: 'https://enlace-a-proyecto1.com'
    },
    {
      imagen: 'angular.png',
      titulo: 'Portfolio personal',
      descripcion: 'Este es mi propio porfolio personal creado con el uso de angular ',
      link: ''
    }
  ];
}

interface Proyecto {
  imagen: string;
  titulo: string;
  descripcion: string;
  link: string;
}
