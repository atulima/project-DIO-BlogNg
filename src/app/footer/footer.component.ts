import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;

  constructor() { }

  ngOnInit(): void {
  }

}
