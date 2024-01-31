import { Injectable } from '@angular/core';
import { RentTicket } from 'src/app/model/renteTicke';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logedIn!:boolean;
  user : User[] = [
    {
      id:99,
      fullName:'Ayoub Mouchtak',
      email:'ayoub.mouchtak@gmail.com',
      password:'ayoub',
    },
    {
      id:98,
      fullName:'Jack Tate',
      email:'jack.tate@gmail.com',
      password:'',
    },
    {
      id:97,
      fullName:'Toni Kros',
      email:'toni.kros@gmail.com',
      password:'toni',
    }
  ];

  rentTicket:RentTicket[]=[
    { idClient:1,
      carMatricule:'A9844',
      carMarque:'BMW',
      dateDebut:new Date('2023-9-1'),
      dateFin:new Date('2023-10-1'),
      priceTotal:5000
    },
      
    { idClient:2,
      carMatricule:'A8999',
      carMarque:'Mercedes',
      dateDebut:new Date('2023-9-1'),
      dateFin:new Date('2023-10-1'),
      priceTotal:5000},
   
    ];
  constructor() { }

  logIn(email:string,password:string):boolean{
    this.logedIn =false;
    this.user.forEach(userX => {
      if(userX.email===email && userX.password===password){
        this.logedIn = true;
        return ; 
      }
    });
    return this.logedIn;
  }

  getTicket(){
    return this.rentTicket;
  }

}
