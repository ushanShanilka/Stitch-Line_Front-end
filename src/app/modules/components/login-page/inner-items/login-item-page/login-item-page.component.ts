import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import UserDTO from "../../../../dto/UserDTO";
import {UserService} from "../../../../services/user.service";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-login-item-page',
  templateUrl: './login-item-page.component.html',
  styleUrls: ['./login-item-page.component.scss']
})
export class LoginItemPageComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.minLength(0)),
    password: new FormControl('',[Validators.minLength(4),
    Validators.maxLength(20)]),
  })

  loading=false;


  constructor(private userService: UserService,private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  login(){
    this.loading=true;
    // @ts-ignore
    const dto = new UserDTO(
      this.loginForm.get('username')?.value.toString().trim(),
      this.loginForm.get('password')?.value.toString().trim(),
    );

    this.userService.login(dto).subscribe(response=>{
      console.log(response.jwtToken)


      const todayDate = new Date();
      const tomorrow = new Date(todayDate);
      tomorrow.setDate(tomorrow.getDate()+1);

      const cookieOption = {
        expires:tomorrow
      }

      this.cookieService.put('userToken', response.jwtToken, cookieOption)
      alert("Success !")

      this.loading=true;
    },error => {
      console.log(error)
      this.loading=false;
    })
  }

}
