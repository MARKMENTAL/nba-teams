import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuggets',
  standalone: true,
  imports:[CommonModule],
  // styleUrls: ['../global.css'],
  // kept for demonstration of importing styles
  template: `
    <div *ngIf="nuggetsInfo">
      <h2>Denver Nuggets</h2>
      <p>{{ nuggetsInfo.history }}</p>
      <p>{{ nuggetsInfo.playingStyle }}</p>
      <p>The Nuggets have won {{nuggetsInfo.championships}} NBA championship.</p>
      <p>The Nuggets have had many notable players, including:</p>
      <ul>
        <li *ngFor="let player of nuggetsInfo.notablePlayers">{{ player }}</li>
      </ul>
      <p>For more information about the Nuggets, visit their <a href="{{ nuggetsInfo.officialWebsite }}">official website</a>.</p>
      <p>The Nuggets won their first NBA Finals in 2023, beating the Miami Heat in a 5-game series.</p>
    </div>
    <div class="cardft">
        <a class="linkbtn" href="/">Home Page</a>
        <a class="linkbtn" href="/lakers">Los Angeles Lakers</a>
        <a class="linkbtn" href="/warriors">Golden State Warriors</a>
    </div>
  `
})
export default class NuggetsComponent implements OnInit {
  static clientProviders = [provideHttpClient()];
  static renderProviders = [];

  http = inject(HttpClient);
  nuggetsInfo: any;

  constructor() {}

  ngOnInit(): void {
    this.http
      .get<any>('nuggets-info.json')
      .subscribe((data) => (this.nuggetsInfo = data));
  }
}
