import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mock-twitter';
  isMenuOpen : boolean = true

  likeStatus = 0;
  constructor() { }

  ngOnInit(): void {
  }
  
  liking() {
    this.likeStatus = 1;
  }

//   toggleAccordion(): void {
//     this.isMenuOpen = !this.isMenuOpen;
//     console.log(this.isMenuOpen);
// }

}
