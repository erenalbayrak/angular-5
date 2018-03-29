import { Component, OnInit, ViewChild } from '@angular/core';

import {User} from "../../models/User";
import {log} from "util";
import {DataService} from "../../service/data.service";

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

  @ViewChild("userForm")
  form: any;

  currentClasses = {};
  currentStyles = {};

  numberArray: number[];
  mixedArray: any[];
  myTupel: [string, number, boolean];

  // Use constructor to inject dependencies
  constructor(private dataService: DataService) {
  }

  // Use ngOnInit to fill properties, ajax/service calls
  ngOnInit() {
    this.loaded = false;
    this.showExtended = true;
    this.enableAdd = false;
    this.showUserForm = false;

    this.user = this.getEmptyUserObj();
    this.users = this.dataService.getUsers();

    this.numberArray = [14, 8, 96, 45];
    this.mixedArray = [true, undefined, "OK", 77];
    this.myTupel = ["Hallo", 123, false, "Jo"];

    const newUserWithoutOptionalParams: User = {
      firstName: "El",
      lastName: "Homo",
      age: 41,
      email: "nhz@ol.rev",
      isActive: true
    };
    this.dataService.addUser(newUserWithoutOptionalParams);

    this.loaded = true;
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  // onSubmit(event) {
  // event.preventDefault(); nicht nötig bei (ngSubmit)
  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log("Form not valid.");
    }
    else {
      value.isActive = true;
      value.hide = true;
      value.registered = new Date();

      // Workaround
      console.log(value);
      value.address = this.getEmptyAddress();
      value.address.street = this.user.address.street;
      value.address.city = value["city"];
      value.address.state = value["state"];

      this.dataService.addUser(value);
      this.form.reset();
    }
    /* this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = this.getEmptyUserObj(); */
  }

  private getEmptyUserObj(): User {
    const user: User = {
      firstName: "",
      lastName: "",
      email: "",
      age: null,
      address: {
        street: "",
        city: "",
        state: ""
      }
    };
    return user;
  }

  getEmptyAddress(): User["address"] {
    const  address: User["address"] = {
      street: "",
      city: "",
      state: ""
    };
    return address;
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

  sayHello(): void {
    // ES6 variante:
    console.log(`Hallo ${this.users[0].firstName}`);
  }
}
