import { Component } from '@angular/core';
import {WorkDataService} from '../../work-data.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  workPost: any;
  post: any; 
  postLinks: any;
  constructor(private WorkDataService: WorkDataService){}
  
  ngOnInit(){
    this.getSinglePost();
  }

  // getPosts(){
  //   this.WorkDataService.getPosts().subscribe((data)=>{
  //     this.workPost = data;
  //       console.log(data);
  //     }
  //   )
  // }

  getSinglePost(){
    this.WorkDataService.getPosts().subscribe((data:any)=>{
      this.workPost = data;
        // console.log(data);
      }
    )
  }

}
