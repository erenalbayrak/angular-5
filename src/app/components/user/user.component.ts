import { Component, OnInit } from '@angular/core';

import {User} from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  showExtended: boolean;
  loaded: boolean;

  numberArray: number[];
  mixedArray: any[];
  myTupel: [string, number, boolean];

  // Use constructor to inject dependencies
  constructor() {
  }

  // Use ngOnInit to fill properties, ajax/service calls
  ngOnInit() {
    this.loaded = false;
    this.showExtended = true;

    this.users = [
      {
        firstName: "Eren Ömer",
        lastName: "Albayrak",
        age: 25,
        address: {
          street: "Winkelgasse 7",
          city: "London",
          state: "K.A."
        }
      },
      {
        firstName: "Maggi",
        lastName: "Müller",
        age: 24,
        address: {
          street: "Winkelgasse 69",
          city: "London",
          state: "K.A."
        }
      },
      {
        firstName: "Carol",
        lastName: "Ann",
        age: 22,
        address: {
          street: "Torweg 12",
          city: "Frankfurt",
          state: "Hessen"
        }
      }
    ];

    this.numberArray = [14, 8, 96, 45];
    this.mixedArray = [true, undefined, "OK", 77];
    this.myTupel = ["Hallo", 123, false, "Jo"];

    const newUserWithoutOptionalParams: User = {
      firstName: "El",
      lastName: "Homo",
      age: 41
    };
    this.addUser(newUserWithoutOptionalParams);
    this.loaded = true;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  sayHello(): void {
    // ES6 variante:
    console.log(`Hallo ${this.users[0].firstName}`);
  }
}
