import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      // Add smooth scrolling to all links
      $('a').on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          const hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('#contentContainer').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)

          });
        } // End if
      });
    });

  }

}