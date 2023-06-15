import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  // styleUrls: ['../global.css'],
  // kept for demonstration of importing styles
  imports:[CommonModule],
  template: `
    <div>
      <h2>Welcome to the NBA Portal</h2>
      <p>The National Basketball Association (NBA) is a men's professional basketball league in North America. It is composed of 30 teams and is one of the four major professional sports leagues in the United States and Canada.</p>
      <p>The NBA was founded in 1946 as the Basketball Association of America (BAA). It merged with the National Basketball League (NBL) in 1949 to become the NBA, which is now the premier men's professional basketball league in the world.</p>
      <div class="cardft">
        <a class="linkbtn" href="/lakers">Los Angeles Lakers</a>
        <a class="linkbtn" href="/warriors">Golden State Warriors</a>
        <a class="linkbtn" href="/nuggets">Denver Nuggets</a>
      </div>
    </div>
  `
})
export default class HomeComponent {}