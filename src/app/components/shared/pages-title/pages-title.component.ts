import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pages-title',
  templateUrl: './pages-title.component.html',
  styleUrls: ['./pages-title.component.css'],
})


export class PagesTitleComponent {

  @Input() bannerTextHeading: any;
  @Input() bannerTextSubHeading: any;

}
