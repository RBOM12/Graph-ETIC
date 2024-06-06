import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

    souligne() {
        // @ts-ignore
        document.getElementById('bouton').style.textDecoration = 'underline';
    }

}
