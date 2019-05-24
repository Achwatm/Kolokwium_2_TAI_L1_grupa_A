import { Component, OnInit } from '@angular/core';
import {MADataService} from '../../services/ma-data.service';

@Component({
  selector: 'app-ma-blog',
  templateUrl: './ma-blog.component.html',
  styleUrls: ['./ma-blog.component.css']
})
export class MABlogComponent implements OnInit {
  posts: Object;
  constructor(private data: MADataService) { }

  ngOnInit() {
    this.data.getAll().subscribe(response =>
      this.posts = response);
  }

}
