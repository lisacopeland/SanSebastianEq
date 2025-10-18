import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

type Photo = { src: string; alt: string; caption?: string };

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryComponent {

  photos = [
    { src: 'assets/gallery/paddocks.jpg', alt: 'Turnout paddocks' },
    { src: 'assets/gallery/stallsinbarn.jpg', alt: 'Center aisle barn' },
    { src: 'assets/gallery/washrack.jpg', alt: 'Hot and cold water washrack' },
    { src: 'assets/gallery/barnfront.jpg', alt: 'Barn parking' },
    { src: 'assets/gallery/trailerparking.jpg', alt: 'Trailer parking' },
    { src: 'assets/gallery/tackroom1.jpg', alt: 'Tackroom saddle racks' },
    { src: 'assets/gallery/tackroom2.jpg', alt: 'Tackroom lockers' },
    { src: 'assets/gallery/barnwindows.jpg', alt: 'Light and airy stalls' },
    { src: 'assets/gallery/breezeway.jpg', alt: 'Large open aisleway' },
    { src: 'assets/gallery/lounge.jpg', alt: 'Barn lounge' },
    // ...
  ];


}
