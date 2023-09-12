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


  //this is a variable that hold number
  projectcount:number = 0;
  clientcount:number = 0;
  coffeecount:number = 0;
  greatIdeas:number = 0;

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.
  projectcountstop:any = setInterval(()=>{
    this.projectcount++;
    //we need to stop this at  particular point; will use if condition
    if(this.projectcount ==1000)
    {
      //clearinterval will stop tha function
      clearInterval(this.projectcountstop);
    }

  },.5) //10 is milisecond you can control it


  clientcountstop:any = setInterval(()=>{
    this.clientcount++;
    if(this.clientcount == 100)
    {
      
      clearInterval(this.clientcountstop);
    }
  },.5) 


  coffeecountstop:any = setInterval(()=>{
    this.coffeecount++;
    if(this.coffeecount == 3000)
    {
      
      clearInterval(this.coffeecountstop);
    }
  },.5)

  greatIdeasstop:any = setInterval(()=>{
    this.greatIdeas++;
    if(this.greatIdeas == 1500)
    {
      
      clearInterval(this.greatIdeasstop);
    }
  },.5)

}
