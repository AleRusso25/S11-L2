import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  constructor() {}

  ngOnInit(): void {}
  submitLogin(target: NgForm) {
    alert('Submitted');
  }
}
