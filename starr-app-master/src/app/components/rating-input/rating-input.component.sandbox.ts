import { sandboxOf } from 'angular-playground';
import {RatingInputComponent} from "./rating-input.component";


export default sandboxOf(RatingInputComponent)
  .add('with no additional data', {
    template: `<app-rating-input></app-rating-input>`
  })
  .add('with one star ', {
    template: `<app-rating-input [initNumberOfStars]="1" ></app-rating-input>`
  })
  .add('with two stars ', {
    template: `<app-rating-input [initNumberOfStars]="2" ></app-rating-input>`
  })
  .add('with three stars ', {
    template: `<app-rating-input [initNumberOfStars]="3" ></app-rating-input>`
  })
  .add('with four stars ', {
    template: `<app-rating-input [initNumberOfStars]="4" ></app-rating-input>`
  })
  .add('with five stars ', {
    template: `<app-rating-input [initNumberOfStars]="5" ></app-rating-input>`
  })
  .add('with more than 5 stars ', {
    template: `<app-rating-input [initNumberOfStars]="100" ></app-rating-input>`
  })
  .add('with less than 5 stars ', {
    template: `<app-rating-input [initNumberOfStars]="-1" ></app-rating-input>`
  });



