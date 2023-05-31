// Array containing the page URLs
const pageUrls = [
  "http://127.0.0.1:5500/js-card1.html",
  "http://127.0.0.1:5500/js-card2.html",
  "http://127.0.0.1:5500/js-card3.html",
  "http://127.0.0.1:5500/js-card4.html",
];

// Function to get input of being at bottom of page (didn't worked precisely
// Used ChatGPT to help in that case
function isScrollAtBottom() {
  const scrollTrigger = document.getElementById("scrollTrigger");
  const triggerPosition = scrollTrigger.getBoundingClientRect().top;

  return triggerPosition <= window.innerHeight;
}

// Function to get the current page index from the URL
function getCurrentPageIndex() {
  // Get the current URL
  var currentUrl = window.location.href;

  // Find the index of the current URL in the pageUrls array
  // For the currentPageIndex
  var currentPageIndex = pageUrls.findIndex((url) => url === currentUrl);

  if (currentPageIndex > -1) {
    return currentPageIndex;
  } else {
    console.log("no page url");
    return 0;
  }
}

// Function to load the next page
function loadNextPage() {
  // Get the current page index based on the current URL
  var currentPageIndex = getCurrentPageIndex();

  // Determine the index of the next page
  var nextPageIndex = currentPageIndex + 1;

  // Go to the next page, if there are no pages left, go to the starting page
  // The nextPage I've developed with ChatGPT, the reset not
  if (nextPageIndex < pageUrls.length) {
    var nextPageUrl = pageUrls[nextPageIndex];
    window.location.href = nextPageUrl;
  } else {
    window.location.href = pageUrls[0];
  }
}

// Eventlistener for scrolling
window.addEventListener("scroll", function () {
  if (isScrollAtBottom()) {
    loadNextPage();
  }
});
