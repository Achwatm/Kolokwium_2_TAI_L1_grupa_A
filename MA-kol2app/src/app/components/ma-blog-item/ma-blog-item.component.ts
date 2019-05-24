import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ma-blog-item',
  templateUrl: './ma-blog-item.component.html',
  styleUrls: ['./ma-blog-item.component.css']
})
export class MaBlogItemComponent implements OnInit {
  @Input() title: String;
  @Input() text: String;
  @Input() url: String;
  constructor() { }

  ngOnInit() {
  }

}
