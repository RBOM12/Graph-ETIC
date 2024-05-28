import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";

import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/Footer/footer.component";
import {Dashboard2Component} from "../../components/dashboard2/dashboard2.component";


@Component({
  selector: 'app-dashboard-page2',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    FooterComponent,
    Dashboard2Component,

  ],
  templateUrl: './dashboard-page2.component.html',
  styleUrl: './dashboard-page2.component.css'
})

export class DashboardPage2Component {
}
