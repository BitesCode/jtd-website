import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];

  
  constructor() {

  }

  
  ngOnInit() {
    // add the css-style to the html and body tags
    this.bodyTag.classList.add('home-page');
    this.htmlTag.classList.add('home-page');
  }

  ngOnDestroy() {
    // remove the the body classes
    this.bodyTag.classList.remove('home-page');
    this.htmlTag.classList.remove('home-page');
  }

}
