import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ severName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ severName: string, serverContent: string }>();

  //newServerName = '';
  newServerContent = '';

  //@ViewChild('serverContentInput', { static: true }) serverContentInput : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput : HTMLInputElement) {
    this.serverCreated.emit({
      severName: nameInput.value,
      serverContent: this.newServerContent
    });
  }
//There is a mistake in the second commit message these are local references not variables
  onAddBlueprint(nameInput :HTMLInputElement) {
    this.bluePrintCreated.emit({
      severName: nameInput.value,
      serverContent: this.newServerContent
    });
  }
}
