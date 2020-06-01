import { Component, OnInit } from '@angular/core';
import { Feed } from '../models/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {

  feed: Feed = {
    title:'hola',
    date: new Date(),
    content: 'contenido'
  };
  constructor() { }

  ngOnInit() {
  }

}
