import { Component } from '@angular/core';
import { graphviz }  from 'd3-graphviz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'D3-Graph';


  d3() {
    graphviz('#graph').renderDot('digraph {a -> b}');
  }
  
}
