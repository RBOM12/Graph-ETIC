import {Component, HostListener, OnInit} from '@angular/core';


import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {RouterLink} from "@angular/router";
import {DashboardService} from "../../service/dashboard.service";

@Component({
  selector: 'app-dashboard2' ,
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit{
  constructor( private DS : DashboardService) { }
  url = '';
  anne = 2023;
  type = 2;
  ngOnInit() {
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


