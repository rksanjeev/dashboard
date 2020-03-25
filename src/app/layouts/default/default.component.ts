import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sideMenuOpened = false;
  constructor() { }

  ngOnInit(): void {
  }
sideMenuToggle(){
    this.sideMenuOpened = !this.sideMenuOpened
  }
}
