import { Injectable } from '@angular/core';
import { ITickets } from '../Model/itickets';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
private ticketList:ITickets[] ;
  constructor() {
    this.ticketList=[
      {id:"C-101",user:{name:"أحمد محمود",userImg:"assets/img/Image-1.png",phoneNO:"0123456789"},price:1200,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},
      {id:"C-102",user:{name:"محمد الغريب",userImg:"assets/img/Image-2.png",phoneNO:"01062445443"},price:12000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:4,quantity:1},
      {id:"C-103",user:{name:"محمد سيد",userImg:"assets/img/Image-3.png",phoneNO:"0123456789"},price:15000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:7,quantity:12},
      {id:"C-104",user:{name:"محمد أشرف ",userImg:"assets/img/Image-4.png",phoneNO:"01062445443"},price:10000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:6,quantity:3},
      {id:"C-105",user:{name:"ياسين محمد",userImg:"assets/img/Image-1.png",phoneNO:"01062445443"},price:1200,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:9,quantity:2},
      {id:"C-106",user:{name:"نور أحمد ",userImg:"assets/img/Image-2.png",phoneNO:"01062445443"},price:1200,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:1,quantity:2},
      {id:"C-107",user:{name:"آسر سيد",userImg:"assets/img/Image-3.png",phoneNO:"01062445443"},price:5000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:2,quantity:2},
      {id:"C-108",user:{name:"أحمد جمال ",userImg:"assets/img/Image-4.png",phoneNO:"01062445443"},price:8000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},
      {id:"C-109",user:{name:"مازن رجب",userImg:"assets/img/Image-1.png",phoneNO:"01062445443"},price:9000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},
      {id:"C-110",user:{name:"محمود سيد ",userImg:"assets/img/Image-2.png",phoneNO:"01062445443"},price:13000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},
      {id:"C-111",user:{name:"أحمد مجدي ",userImg:"assets/img/Image-3.png",phoneNO:"01062445443"},price:6000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},
      {id:"C-112",user:{name:"محمد مصطفي ",userImg:"assets/img/Image-4.png",phoneNO:"01062445443"},price:7500,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},
      {id:"C-113",user:{name:"أنس جمال ",userImg:"assets/img/Image-1.png",phoneNO:"01062445443"},price:11000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},
      {id:"C-114",user:{name:"عبدالرحمن خالد ",userImg:"assets/img/Image-2.png",phoneNO:"01062445443"},price:16000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},
      {id:"C-115",user:{name:"محمد أشرف ",userImg:"assets/img/Image-3.png",phoneNO:"01062445443"},price:2000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},
      {id:"C-116",user:{name:"محمد أشرف ",userImg:"assets/img/Image-4.png",phoneNO:"01062445443"},price:20000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},
      {id:"C-117",user:{name:"محمد أشرف ",userImg:"assets/img/Image-1.png",phoneNO:"01062445443"},price:35000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},
      {id:"C-118",user:{name:"محمد أشرف ",userImg:"assets/img/Image-2.png",phoneNO:"01062445443"},price:3000,cinemaName:" سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",peopleNo:5,quantity:2},

    ];
   }
   getAllTickets():ITickets[]
   {
     return this.ticketList;
   }
}
