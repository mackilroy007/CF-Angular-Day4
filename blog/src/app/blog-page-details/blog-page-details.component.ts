import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
// import poi.ts
import { POI } from '../POI';

@Component({
  selector: 'app-blog-page-details',
  templateUrl: './blog-page-details.component.html',
  styleUrls: ['./blog-page-details.component.css']
})
export class BlogPageDetailsComponent implements OnInit {
  POI;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.POI = POI[+params.get('POIID')];
    });
  }

}
