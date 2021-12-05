import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-program-page',
  templateUrl: './program-page.component.html',
  styleUrls: ['./program-page.component.scss']
})
export class ProgramPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.router.navigateByUrl("/login");
  }
}
