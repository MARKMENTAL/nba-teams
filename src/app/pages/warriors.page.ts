import { Component } from '@angular/core';

@Component({
  selector: 'app-warriors',
  standalone: true,
  template: `
    <div>
      <h2>Golden State Warriors</h2>
      <p>The Golden State Warriors are a professional basketball team based in San Francisco, California. They compete in the National Basketball Association (NBA) as a member of the league's Western Conference Pacific Division.</p>
      <p>The Warriors were founded in Philadelphia in 1946 and were originally known as the Philadelphia Warriors. They moved to San Francisco in 1962 and then to Oakland in 1971. The team returned to San Francisco in 2019 and began playing in the newly-built Chase Center.</p>
      <p>The Warriors have won six NBA championships, including three in the last six years (2015, 2017, and 2018). They have also won numerous conference and division titles, and have had many legendary players pass through their ranks, including Stephen Curry, Klay Thompson, Kevin Durant, and Wilt Chamberlain.</p>
      <p>For more information about the Warriors, visit their <a href="https://www.nba.com/teams/warriors">official website</a>.</p>
    </div>
    <div class="cardft">
        <a class="linkbtn" href="/">Home Page</a>
        <a class="linkbtn" href="/lakers">Los Angeles Lakers</a>
        <a class="linkbtn" href="/nuggets">Denver Nuggets</a>
    </div>
  `
})
export default class WarriorsComponent {}