import { Component } from '@angular/core';

@Component({
  selector: 'app-nuggets',
  standalone: true,
  // styleUrls: ['../global.css'],
  // kept for demonstration of importing styles
  template: `
    <div>
      <h2>Denver Nuggets</h2>
      <p>The Denver Nuggets are a professional basketball team based in Denver, Colorado. They compete in the National Basketball Association (NBA) as a member of the league's Western Conference Northwest Division.</p>
      <p>The Nuggets were founded as the Denver Larks in 1967 as a charter franchise of the American Basketball Association (ABA). They changed their name to the Denver Nuggets in 1974, when they joined the NBA after the ABA-NBA merger.</p>
      <p>The Nuggets have had several successful seasons and have been known for their high-scoring and fast-paced style of play. In 2023, they achieved a historic milestone by winning their first NBA championship. They defeated the Miami Heat in a thrilling 5-game series to claim the title.</p>
      <p>Over the years, the Nuggets have had talented players on their roster, including Alex English, David Thompson, Dikembe Mutombo, and Carmelo Anthony.</p>
      <p>For more information about the Nuggets, visit their <a href="https://www.nba.com/nuggets">official website</a>.</p>
    </div>
    <div class="cardft">
        <a class="linkbtn" href="/">Home Page</a>
        <a class="linkbtn" href="/lakers">Los Angeles Lakers</a>
        <a class="linkbtn" href="/warriors">Golden State Warriors</a>
    </div>
  `
})
export default class NuggetsComponent {}
