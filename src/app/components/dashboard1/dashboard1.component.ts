import {Component, HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {DashboardService} from "../../service/dashboard.service";


@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})


export class Dashboard1Component implements OnInit {
  constructor( private DS : DashboardService) { }
  url = '';
  anne = 2023;
  type = 1;
  ngOnInit() {
    this.url = this.DS.getPBIUrl(this.anne, this.type)
    this.DS.resizeIframe();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.DS.resizeIframe();
  }
  switch ( annee: number){
    // @ts-ignore
    document.getElementById('PBI').src = this.DS.getPBIUrl(annee, this.type)

  }


}
