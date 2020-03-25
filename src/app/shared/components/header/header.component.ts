import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  matMenuTriggerFor:any;
  @Output() toggleSidebarMenu:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
  this.toggleSidebarMenu.emit();
  }
}
