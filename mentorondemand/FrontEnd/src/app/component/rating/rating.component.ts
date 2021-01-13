import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  public _starsRating: number = 0;
  public stars: boolean[];

  get starsRating(): number {
    return this._starsRating;
  }

  @Input() set starsRating(value: number) {
    this._starsRating = value;
    this.rating();
  }

  constructor() { }

  ngOnInit() {
    this.rating();
  }

  public rating(): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.starsRating);
    }
  }
}
