import { Component, OnInit } from '@angular/core';

// import POI info
import { POI } from '../POI';


@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
POI = POI;
  constructor() { }

  ngOnInit(): void {
  }

}
