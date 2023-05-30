import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-brand-slider',
  templateUrl: './brand-slider.component.html',
  styleUrls: ['./brand-slider.component.css']
})
export class BrandSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  slidesStore = [
    {
      id: '1',
      title: 'logo1',
      alt: 'logo1',
      src: 'assets/brands/logo1.png',
    },
    {
      id: '2',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo2.png',
    },
    {
      id: '3',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo3.png',
    },
    {
      id: '4',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo4.png',
    },
    {
      id: '5',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo5.png',
    },
    {
      id: '6',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo6.png',
    },
    {
      id: '7',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo7.png',
    },
    {
      id: '8',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo8.png',
    },
    {
      id: '9',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo9.png',
    }
    , {
      id: '10',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo10.png',
    }
    , {
      id: '11',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo11.png',
    }, {
      id: '12',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo12.png',
    }
    , {
      id: '13',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo13.png',
    }
    , {
      id: '14',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo14.png',
    }
    , {
      id: '15',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo15.png',
    }
    , {
      id: '16',
      title: 'logo21',
      alt: 'logo2',
      src: 'assets/brands/logo16.png',
    }
  ]
}
