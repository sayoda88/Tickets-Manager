import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/Services/ticket-service.service';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MessageService]
})
export class TableComponent implements OnInit {
  ticketList: any = [];
  swichtBtnCase:boolean=true;
  first = 0;
  rows = 10;
  constructor(private _TicketService: TicketService,
    private _messageService: MessageService) { }
  ngOnInit(): void {
    this.ticketList = this._TicketService.getAllTickets();
    //console.log(this.ticketList);
  }
  onBasicUploadAuto(event: UploadEvent) {
    this._messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded Successfully' });
}
onUpload(e:any){
  console.log(e.value);
}
next() {
  this.first = this.first + this.rows;
}

prev() {
  this.first = this.first - this.rows;
}

reset() {
  this.first = 0;
}

pageChange(e:any) {
  this.first = e.first;
  this.rows = e.rows;
}

isLastPage(): boolean {
  return this.ticketList ? this.first === this.ticketList.length - this.rows : true;
}

isFirstPage(): boolean {
  return this.ticketList ? this.first === 0 : true;
}

}
