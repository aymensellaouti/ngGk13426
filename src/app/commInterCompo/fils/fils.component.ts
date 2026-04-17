import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-fils',
    templateUrl: './fils.component.html',
    styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input({
    required: true,
    alias: 'message',
    transform: (valeur: string) => "papa a dit " + valeur
  })
  messageDePapa = "il ne m'a encore rien dit";
  @Output()
  sendMessageToPapa = new EventEmitter<string>();

  onSendMessageToPage() {
    this.sendMessageToPapa.emit("D'accord à condition de garder la monnaie :D");
  }
}
