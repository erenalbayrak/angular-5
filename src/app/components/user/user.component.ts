import { Component, OnInit } from '@angular/core';

import {User} from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  users: User[];
  showExtended: boolean;
  loaded: boolean;
  enableAdd: boolean;
  showUserForm: boolean;

  currentClasses = {};
  currentStyles = {};

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
    this.enableAdd = false;
    this.showUserForm = false;

    this.user = this.getEmptyUserObj();
    this.users = [
      {
        firstName: "Eren Ömer",
        lastName: "Albayrak",
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

    this.numberArray = [14, 8, 96, 45];
    this.mixedArray = [true, undefined, "OK", 77];
    this.myTupel = ["Hallo", 123, false, "Jo"];

    const newUserWithoutOptionalParams: User = {
      firstName: "El",
      lastName: "Homo",
      age: 41,
      isActive: true
    };
    this.addUser(newUserWithoutOptionalParams);

    this.loaded = true;
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  addUserFromForm(): void {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = this.getEmptyUserObj();
  }

  private getEmptyUserObj(): User {
    const user: User = {
      firstName: "",
      lastName: "",
      age: null,
      address: {
        street: "",
        city: "",
        state: ""
      }
    };
    return user;
  }

  setCurrentClasses(): void {
    this.currentClasses = {
      "btn-success": this.enableAdd,
      "big-text": this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      "padding-top": this.showExtended ? "0" : "40px",
      "font-size": this.showExtended ? "" : "40px"
    };
  }

  toggleHide(user: User) {
      user.hide = !user.hide;
  }

  onSubmit(event) {
    event.preventDefault();
  }

  sayHello(): void {
    // ES6 variante:
    console.log(`Hallo ${this.users[0].firstName}`);
  }
}
