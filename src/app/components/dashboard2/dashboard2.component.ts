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
export class Dashboard2Component implements OnInit {
  constructor(private DS: DashboardService) {
  }
  anne = 2023;
  type = 2;

  ngOnInit() {
    this.DS.resizeIframe();
    // @ts-ignore
    document.getElementById('PBI').src = this.DS.getPBIUrl(this.anne, this.type)

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.DS.resizeIframe();

  }

  switch(annee: number) {
    this.anne = annee;
    const iframe = document.getElementById('PBI') as HTMLIFrameElement;
    this.anne = annee;
    iframe.src = this.DS.getPBIUrl(annee, this.type)

  }
}


