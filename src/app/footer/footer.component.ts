import { Component, OnInit } from '@angular/core';
import { Foot } from '../foot';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  foot: Foot = {
    id: 1,
    name: 'Varun'
  };

  constructor() { }

  ngOnInit() {
  }

}
