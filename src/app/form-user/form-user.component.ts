import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from '../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
constructor (private activated:ActivatedRoute){}
user: user = new user();
users: user[] = [];

onSubmit(form:any) {
  if (form.valid) {
    this.users.push(form.value);
    form.reset();
  }
}
ngOnInit(): void {
  this.user= new user();
}
add(f: NgForm){
  console.log(f);
}
}
