import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [MessageService]

})
export class CardComponent {
  copyText:string='www.tazkty.com/473847';
  public myAngularxQrCode: any = null;
  constructor (private _MessageService: MessageService) {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  copyFunc(copyText:string){
    const insertedText= navigator.clipboard;
    insertedText.writeText(copyText).then(()=>{
      this._MessageService.add({ severity: 'success', summary: 'Success', detail: 'Text Copied to ClipBoard' });
    });
  }

}
