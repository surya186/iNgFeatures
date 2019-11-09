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

  onAddServer(nameInput) {
    this.serverCreated.emit({
      severName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput) {
    this.bluePrintCreated.emit({
      severName: nameInput.value,
      serverContent: this.newServerContent
    });
  }
}
