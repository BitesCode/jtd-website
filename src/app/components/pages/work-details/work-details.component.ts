import { Component } from '@angular/core';
import { WorkDataService } from '../../work-data.service';
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent {
  workPost: any;
  getId: any;

  constructor(private WorkDataService: WorkDataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSinglePost();
    this.getDataShow();
  }

  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
  
  getSinglePost() {
    this.WorkDataService.getPosts().subscribe((data: any) => {
      this.workPost = data; 
      // console.log(this.workPost);
    }
    )
  }

  getDataShow(){
    this.route.params.subscribe(params=>{
      var id = params['id'];
      this.getId = id;
  });
  }

 
  getImageUrl(content: string): string | null {
    const imgTagRegex = /<img[^>]+src="([^">]+)"/i;
    const match = imgTagRegex.exec(content);
    return match ? match[1] : null;
  }


}
