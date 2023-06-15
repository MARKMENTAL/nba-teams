import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lakers',
  standalone: true,
  imports:[CommonModule],
  // styleUrls: ['../global.css'],
  // kept for demonstration of importing styles
  template: `
    <div *ngIf="lakersInfo">
      <h2>Los Angeles Lakers</h2>
      <p>{{ lakersInfo.history }}</p>
      <p>The Lakers have won {{ lakersInfo.championships }} NBA championships, making them one of the most successful franchises in NBA history.</p>
      <p>The Lakers have had many legendary players pass through their ranks, including:</p>
      <ul>
        <li *ngFor="let player of lakersInfo.notablePlayers">{{ player }}</li>
      </ul>
      <p>For more information about the Lakers, visit their <a href="{{ lakersInfo.officialWebsite }}">official website</a>.</p>
    </div>
    <div class="cardft">
        <a class="linkbtn" href="/">Home Page</a>
        <a class="linkbtn" href="/nuggets">Denver Nuggets</a>
        <a class="linkbtn" href="/warriors">Golden State Warriors</a>
    </div>
  `
})
export default class LakersComponent implements OnInit {
  static clientProviders = [provideHttpClient()];
  static renderProviders = [];

  http = inject(HttpClient);
  lakersInfo: any;

  constructor() {}

  ngOnInit(): void {
    this.http
      .get<any>('lakers-info.json')
      .subscribe((data) => (this.lakersInfo = data));
  }
}
