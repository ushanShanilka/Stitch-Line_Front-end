import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import UserDTO from "../../../../dto/UserDTO";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-item-page',
  templateUrl: './sign-up-item-page.component.html',
  styleUrls: ['./sign-up-item-page.component.scss']
})
export class SignUpItemPageComponent implements OnInit {

  singUpForm = new FormGroup({
    username: new FormControl('', Validators.minLength(1)),
    password: new FormControl('',[Validators.minLength(4),
      Validators.maxLength(20)]),
    name: new  FormControl('',Validators.minLength(1)),
    mobileNumber: new FormControl('',Validators.maxLength(10)),
    dateOfBirth: new FormControl(''),
    gender: new FormControl('',Validators.minLength(1)),
    language: new FormControl('')
  })

  loading=false;


  constructor(private router: Router,private userService: UserService ) { }

  ngOnInit(): void {
  }

  register(){
    this.loading=true;
    const dto = new UserDTO(
      this.singUpForm.get('username')?.value.toString().trim(),
      this.singUpForm.get('password')?.value.toString().trim(),
      this.singUpForm.get('name')?.value.toString().trim(),
      this.singUpForm.get('mobileNumber')?.value.toString().trim(),
      this.singUpForm.get('dateOfBirth')?.value.toString().trim(),
      this.singUpForm.get('gender')?.value.toString().trim(),
      this.singUpForm.get('language')?.value.toString().trim()
    );

    this.userService.register(dto).subscribe(response=>{
      console.log(response)
      alert("Success !");
      this.loading=true;
      this.router.navigateByUrl("/login");
    },error => {
      console.log(error)
      this.loading=false;
    })
  }

}
