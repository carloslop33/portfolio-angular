import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private projects = [
    { title: 'Proyecto 1', description: 'Descripción 1', image: 'img1.jpg', link: '#' },
    { title: 'Proyecto 2', description: 'Descripción 2', image: 'img2.jpg', link: '#' },
    { title: 'Proyecto 3', description: 'Descripción 3', image: 'img3.jpg', link: '#' },
  ];

  getProjects() {
    return this.projects;
  }
}
