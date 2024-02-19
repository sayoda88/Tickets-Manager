export interface ITickets {
    id:string;
    user:{
        name:string;
        userImg?:string;
        phoneNO:string;
    }
    price:number;
    cinemaName:string;
    peopleNo:number;
    quantity:number;
}
