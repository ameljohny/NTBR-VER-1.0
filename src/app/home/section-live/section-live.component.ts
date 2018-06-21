import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { tap, catchError } from 'rxjs/operators';
// import { of } from 'rxjs/observable/of';
declare var moment;
declare var $;

@Component({
  selector: 'app-section-live',
  templateUrl: './section-live.component.html',
  styleUrls: ['./section-live.component.scss']
})
export class SectionLiveComponent implements OnInit {
news: any;
  constructor() { }
  // private http: HttpClient, private router: Router
  ngOnInit() {


    $(document).ready(function() {
      let clock;
     // Grab the current date
      const currentDate = new Date();
      moment.tz.add('Asia/Calcutta|HMT BURT IST IST|-5R.k -6u -5u -6u|01232|-18LFR.k 1unn.k HB0 7zX0');
      moment.tz.link('Asia/Calcutta|Asia/Kolkata');

     // Target future date/24 hour time/Timezone.
      const targetDate = moment.tz('2018-08-11 10:00', 'Asia/Calcutta|Asia/Kolkata');
      // Calculate the difference in seconds between the future and current date
      const diff = targetDate / 1000 - currentDate.getTime() / 1000;
      function checktime() {
          const t = clock.getTime();
           if (t <= 0) {
             clock.setTime(0);
           }
           setTimeout(function() {
             checktime();
           }, 1000);
         }
      if (diff <= 0) {
        // If remaining countdown is 0
        clock = $('.clock').FlipClock(0, {
          clockFace: 'DailyCounter',
          countdown: true,
          autostart: false
        });
        } else {
        // Run countdown timer
        clock = $('.clock').FlipClock(diff, {
          clockFace: 'DailyCounter',
          countdown: true,
          callbacks: {
            stop: function() {
              console.log('Timer has ended!');
            }
          }
        });
         // Check when timer reaches 0, then stop at 0
         setTimeout(function() {
          checktime();
        }, 1000);
        }
    });

    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus');
    });

  //   // const httpOptions = {
  //   //   headers: new HttpHeaders({ 'Authorization': sessionStorage.getItem('jwtToken') })
  //   // };
  //   this.http.get('/api/news').subscribe(data => {
  //     this.news = data;
  //     console.log(this.news);
  //   }, err => {
  //     if (err.status === 401) {
  //       this.router.navigate(['login']);
  //     }
  //     }
  //   );
  // }

  // logout() {
  //   sessionStorage.removeItem('jwtToken');
  //   this.router.navigate(['login']);
  // }
  }
  }





