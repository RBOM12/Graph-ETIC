import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Dashboard1Component} from "../../components/dashboard1/dashboard1.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/Footer/footer.component";


@Component({
  selector: 'app-dashboard-page1',
  standalone: true,
  imports: [
    RouterLink,
    Dashboard1Component,
    NavbarComponent,
    FooterComponent,

  ],
  templateUrl: './dashboard-page1.component.html',
  styleUrl: './dashboard-page1.component.css'
})

export class DashboardPage1Component {
}
