import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-warriors',
  standalone: true,
  imports:[CommonModule],
  // styleUrls: ['../global.css'],
  // kept for demonstration of importing styles
  template: `
    <div *ngIf="warriorsInfo">
      <h2>Golden State Warriors</h2>
      <p>{{ warriorsInfo.history }}</p>
      <p>The Warriors have won {{ warriorsInfo.championships }} NBA championships, solidifying their position as one of the successful franchises in NBA history.</p>
      <p>The Warriors have had many notable players throughout their history, including:</p>
      <ul>
        <li *ngFor="let player of warriorsInfo.notablePlayers">{{ player }}</li>
      </ul>
      <p>For more information about the Warriors, visit their <a href="{{ warriorsInfo.officialWebsite }}">official website</a>.</p>
    </div>
    <div class="cardft">
        <a class="linkbtn" href="/">Home Page</a>
        <a class="linkbtn" href="/nuggets">Denver Nuggets</a>
        <a class="linkbtn" href="/lakers">Los Angeles Lakers</a>
    </div>
  `
})
export default class WarriorsComponent implements OnInit {
  static clientProviders = [provideHttpClient()];
  static renderProviders = [];

  http = inject(HttpClient);
  warriorsInfo: any;

  constructor() {}

  ngOnInit(): void {
    this.http
      .get<any>('warriors-info.json')
      .subscribe((data) => (this.warriorsInfo = data));
  }
}
