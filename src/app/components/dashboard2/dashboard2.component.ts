import { Component } from '@angular/core';


import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard2' ,
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component {

}


