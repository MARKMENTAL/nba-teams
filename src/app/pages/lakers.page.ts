import { Component } from '@angular/core';

@Component({
  selector: 'app-lakers',
  standalone: true,
  // styleUrls: ['../global.css'],
  // kept for demonstration of importing styles
  template: `
    <div>
      <h2>Los Angeles Lakers</h2>
      <p>The Los Angeles Lakers are a professional basketball team based in Los Angeles, California. They compete in the National Basketball Association (NBA) as a member of the league's Western Conference Pacific Division.</p>
      <p>The Lakers were originally based in Minneapolis, Minnesota, where they were first established in 1947. The team moved to Los Angeles in 1960 and has been a fixture of the city's sports landscape ever since.</p>
      <p>The Lakers have won 17 NBA championships, tied with the Boston Celtics for the most in NBA history. They have also won numerous conference and division titles, and have had many legendary players pass through their ranks, including Kobe Bryant, Magic Johnson, Shaquille O'Neal, and Kareem Abdul-Jabbar.</p>
      <p>For more information about the Lakers, visit their <a href="https://www.nba.com/teams/lakers">official website</a>.</p>
    </div>
    <div class="cardft">
        <a class="linkbtn" href="/">Home Page</a>
        <a class="linkbtn" href="/warriors">Golden State Warriors</a>
        <a class="linkbtn" href="/nuggets">Denver Nuggets</a>
    </div>
  `
})
export default class LakersComponent {}