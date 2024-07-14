const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn, isReviewAuthor} = require("../middleware.js");
const { createReview } = require("../controllers/review.js");


const reviewController = require("../controllers/review.js");

// Post Request Route
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));


// Delete Review Route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)

);

module.exports = router ;
