import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'test', content: 'Just a test' }];

  onServerAdded(serverData: { severName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.severName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(bluePrintData: { severName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.severName,
      content: bluePrintData.serverContent
    });
  }
}
