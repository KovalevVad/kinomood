import clsx from "clsx"

import { getRating } from "src/shared/lib/get-rating/get-rating"

import "./index.css"

interface props {
  classes?: string;
  rating?: {
    kp?: number;
    imdb?: number;
  }
}

export const MovieRating = ({
  classes,
  rating
} : props) => {

  const classRating = () => {
    const numberRating = +getRating(rating);

    if ( numberRating > 7 ) {
      return "highRating"
    } else if ( numberRating > 5) {
      return "middleRating"
    } else {
      return "lowRating"
    }
  }

  return (
    <div className={clsx(classes, classRating(), "rating")}>{getRating(rating)}</div>
  )
}