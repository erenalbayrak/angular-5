import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

import {User} from "../models/User";
import {of} from "rxjs/observable/of";

@Injectable()
export class DataService {

  private users: User[];

  // For experimental
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "Eren Ömer",
        lastName: "Albayrak",
        email: "asd@xcv.de",
        age: 25,
        address: {
          street: "Winkelgasse 7",
          city: "London",
          state: "K.A."
        },
        image: "http://lorempixel.com/600/600/people/3",
        isActive: true,
        balance: 100,
        registered: new Date("01/02/2018 08:30:00"),
        hide: true
      },
      {
        firstName: "Maggi",
        lastName: "Müller",
        email: "tzu@cvb.zh",
        age: 24,
        address: {
          street: "Winkelgasse 69",
          city: "London",
          state: "K.A."
        },
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false,
        balance: 2200,
        registered: new Date("05/07/2011 10:14:10"),
        hide: true
      },
      {
        firstName: "Carol",
        lastName: "Ann",
        email: "fgh@oz.de",
        age: 22,
        address: {
          street: "Torweg 12",
          city: "Frankfurt",
          state: "Hessen"
        },
        image: "http://lorempixel.com/600/600/people/1",
        isActive: true,
        balance: 450,
        registered: new Date("03/02/2007 10:30:00"),
        hide: true
      }
    ];
  }

  addUser(user: User): void {
    this.users.unshift(user);
  }

  getUsers(): Observable<User[]> {
    console.log("Fetching users from Service...");
    return of(this.users);
  }

  getData() {
    this.data = new Observable( observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next("asd");
      }, 2000);

      setTimeout(() => {
        observer.next({lol: "hahaha"});
      }, 3000);

      setTimeout(() => {
        observer.next(true);
      }, 4000);
    });

    return this.data;
  }
}
