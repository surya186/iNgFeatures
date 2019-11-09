import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
  // Here we can use None in place of emulated - which applies styles globally 
})
export class ServerElementComponent implements OnInit {
  @Input() element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
