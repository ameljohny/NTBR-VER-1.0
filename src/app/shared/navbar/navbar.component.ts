import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    $(document).ready(function() {
      $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
      });
    });

  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
}
