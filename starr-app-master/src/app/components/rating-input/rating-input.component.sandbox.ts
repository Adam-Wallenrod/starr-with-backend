import { sandboxOf } from 'angular-playground';
import {RatingInputComponent} from "./rating-input.component";


export default sandboxOf(RatingInputComponent)
  .add('with simple text', {
    template: `<app-rating-input></app-rating-input>`
  });
