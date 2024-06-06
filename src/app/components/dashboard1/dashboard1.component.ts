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
  anne = 2023;
  type = 1;

  ngOnInit() {
    this.DS.resizeIframe();
    const iframe = document.getElementById('PBI') as HTMLIFrameElement;
    iframe.src = this.DS.getPBIUrl(this.anne, this.type)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.DS.resizeIframe();
  }
  //change l'url du power bi
  switch ( annee: number) {
    const iframe = document.getElementById('PBI') as HTMLIFrameElement;
    this.anne = annee;
    iframe.src = this.DS.getPBIUrl(annee, this.type)
  }

}
