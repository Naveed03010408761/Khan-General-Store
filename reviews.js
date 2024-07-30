document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("review-form");
    const reviewsDiv = document.getElementById("reviews");
  
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    savedReviews.forEach(displayReview);
  
    reviewForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("reviewer-name").value;
      const text = document.getElementById("review-text").value;
      const rating = document.getElementById("review-rating").value;
  
      const review = { name, text, rating };
      displayReview(review);
      saveReview(review);
  
      // Clear form
      reviewForm.reset();
    });
  
    function displayReview(review) {
      const reviewElement = document.createElement("div");
      reviewElement.className = "review";
      reviewElement.innerHTML = `
        <h3>${review.name}</h3>
        <p>${review.text}</p>
        <p>Rating: ${review.rating}</p>
      `;
      reviewsDiv.appendChild(reviewElement);
    }
  
    function saveReview(review) {
      const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
      reviews.push(review);
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  });
  