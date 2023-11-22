//Toggle code for Setup Guide arrow buttons
const toggleOpen = document.getElementById("t-open");
const toggleClose = document.getElementById("t-close");
const contentToToggle = document.getElementById("setup-sect");
const setupCounter = document.getElementById("setup-counter");

let i = parseInt(setupCounter.innerText);
setupCounter.innerText = i;

toggleOpen.addEventListener("click", () => {
  toggleOpen.classList.add("hidden");
  toggleClose.classList.remove("hidden");
  contentToToggle.classList.remove("hidden");
});

toggleClose.addEventListener("click", () => {
  toggleClose.classList.add("hidden");
  toggleOpen.classList.remove("hidden");
  contentToToggle.classList.add("hidden");

  imageToToggleTwo.classList.add("hidden");
  textToToggleTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup-p-bg");

  imageToToggleOne.classList.add("hidden");
  textToToggleOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup-p-bg");

  imageToToggleThree.classList.add("hidden");
  textToToggleThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup-p-bg");

  imageToToggleFour.classList.add("hidden");
  textToToggleFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup-p-bg");

  imageToToggleFive.classList.add("hidden");
  textToToggleFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup-p-bg");
});

//Toggle code for each setup

// For Customize Online Store
const imageToToggleOne = document.getElementById("setup-sect-img-one");
const textToToggleOne = document.getElementById("setup-sect-text-one");
const btnToToggleOne = document.getElementById("setup-sect-btn-one");
const toggleCompOne = document.getElementById("setup-sect-one");

toggleCompOne.addEventListener("click", () => {
  imageToToggleOne.classList.toggle("hidden");
  textToToggleOne.classList.toggle("hidden");
  btnToToggleOne.classList.toggle("hidden");
  toggleCompOne.classList.add("setup-p-bg");

  imageToToggleTwo.classList.add("hidden");
  textToToggleTwo.classList.add("hidden");
  btnToToggleTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup-p-bg");

  imageToToggleThree.classList.add("hidden");
  textToToggleThree.classList.add("hidden");
  btnToToggleThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup-p-bg");

  imageToToggleFour.classList.add("hidden");
  textToToggleFour.classList.add("hidden");
  btnToToggleFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup-p-bg");

  imageToToggleFive.classList.add("hidden");
  textToToggleFive.classList.add("hidden");
  btnToToggleFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup-p-bg");
});

//Load and marked toggle one
const circleOne = document.getElementById("setup-sect-circle-one");
const loadingOne = document.getElementById("setup-sect-load-one");
const markOne = document.getElementById("setup-sect-mark-one");

circleOne.addEventListener("click", () => {
  circleOne.classList.add("hidden");
  loadingOne.classList.remove("hidden");
  setTimeout(() => {
    loadingOne.classList.add("hidden");
    markOne.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
    // i = setupCounter.innerText;
  }, 500);
});

markOne.addEventListener("click", () => {
  markOne.classList.add("hidden");
  circleOne.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
  //   i = setupCounter.innerText;
});

// For Add your first product
const imageToToggleTwo = document.getElementById("setup-sect-img-two");
const textToToggleTwo = document.getElementById("setup-sect-text-two");
const btnToToggleTwo = document.getElementById("setup-sect-btn-two");
const toggleCompTwo = document.getElementById("setup-sect-two");

toggleCompTwo.addEventListener("click", () => {
  imageToToggleTwo.classList.toggle("hidden");
  textToToggleTwo.classList.toggle("hidden");
  btnToToggleTwo.classList.toggle("hidden");
  toggleCompTwo.classList.add("setup-p-bg");

  imageToToggleOne.classList.add("hidden");
  textToToggleOne.classList.add("hidden");
  btnToToggleOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup-p-bg");

  imageToToggleThree.classList.add("hidden");
  textToToggleThree.classList.add("hidden");
  btnToToggleThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup-p-bg");

  imageToToggleFour.classList.add("hidden");
  textToToggleFour.classList.add("hidden");
  btnToToggleFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup-p-bg");

  imageToToggleFive.classList.add("hidden");
  textToToggleFive.classList.add("hidden");
  btnToToggleFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup-p-bg");
});

//Load and marked toggle two
const circleTwo = document.getElementById("setup-sect-circle-two");
const loadingTwo = document.getElementById("setup-sect-load-two");
const markTwo = document.getElementById("setup-sect-mark-two");

circleTwo.addEventListener("click", () => {
  circleTwo.classList.add("hidden");
  loadingTwo.classList.remove("hidden");
  setTimeout(() => {
    loadingTwo.classList.add("hidden");
    markTwo.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
});

markTwo.addEventListener("click", () => {
  markTwo.classList.add("hidden");
  circleTwo.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
});

// For Add a custom domain
const imageToToggleThree = document.getElementById("setup-sect-img-three");
const textToToggleThree = document.getElementById("setup-sect-text-three");
const btnToToggleThree = document.getElementById("setup-sect-btn-three");
const toggleCompThree = document.getElementById("setup-sect-three");

toggleCompThree.addEventListener("click", () => {
  imageToToggleThree.classList.toggle("hidden");
  textToToggleThree.classList.toggle("hidden");
  btnToToggleThree.classList.toggle("hidden");
  toggleCompThree.classList.add("setup-p-bg");

  imageToToggleOne.classList.add("hidden");
  textToToggleOne.classList.add("hidden");
  btnToToggleOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup-p-bg");

  imageToToggleTwo.classList.add("hidden");
  textToToggleTwo.classList.add("hidden");
  btnToToggleTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup-p-bg");

  imageToToggleFour.classList.add("hidden");
  textToToggleFour.classList.add("hidden");
  btnToToggleFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup-p-bg");

  imageToToggleFive.classList.add("hidden");
  textToToggleFive.classList.add("hidden");
  btnToToggleFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup-p-bg");
});

//Load and marked toggle three
const circleThree = document.getElementById("setup-sect-circle-three");
const loadingThree = document.getElementById("setup-sect-load-three");
const markThree = document.getElementById("setup-sect-mark-three");

circleThree.addEventListener("click", () => {
  circleThree.classList.add("hidden");
  loadingThree.classList.remove("hidden");
  setTimeout(() => {
    loadingThree.classList.add("hidden");
    markThree.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
});

markThree.addEventListener("click", () => {
  markThree.classList.add("hidden");
  circleThree.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
});

// For Name your store
const imageToToggleFour = document.getElementById("setup-sect-img-four");
const textToToggleFour = document.getElementById("setup-sect-text-four");
const btnToToggleFour = document.getElementById("setup-sect-btn-four");
const toggleCompFour = document.getElementById("setup-sect-four");

toggleCompFour.addEventListener("click", () => {
  imageToToggleFour.classList.toggle("hidden");
  textToToggleFour.classList.toggle("hidden");
  btnToToggleFour.classList.toggle("hidden");
  toggleCompFour.classList.add("setup-p-bg");

  imageToToggleOne.classList.add("hidden");
  textToToggleOne.classList.add("hidden");
  btnToToggleOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup-p-bg");

  imageToToggleTwo.classList.add("hidden");
  textToToggleTwo.classList.add("hidden");
  btnToToggleTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup-p-bg");

  imageToToggleThree.classList.add("hidden");
  textToToggleThree.classList.add("hidden");
  btnToToggleThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup-p-bg");

  imageToToggleFive.classList.add("hidden");
  textToToggleFive.classList.add("hidden");
  btnToToggleFive.classList.add("hidden");
  toggleCompFive.classList.remove("setup-p-bg");
});

//Load and marked toggle four
const circleFour = document.getElementById("setup-sect-circle-four");
const loadingFour = document.getElementById("setup-sect-load-four");
const markFour = document.getElementById("setup-sect-mark-four");

circleFour.addEventListener("click", () => {
  circleFour.classList.add("hidden");
  loadingFour.classList.remove("hidden");
  setTimeout(() => {
    loadingFour.classList.add("hidden");
    markFour.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
});

markFour.addEventListener("click", () => {
  markFour.classList.add("hidden");
  circleFour.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
});

// For Add your first product
const imageToToggleFive = document.getElementById("setup-sect-img-five");
const textToToggleFive = document.getElementById("setup-sect-text-five");
const btnToToggleFive = document.getElementById("setup-sect-btn-five");
const toggleCompFive = document.getElementById("setup-sect-five");

toggleCompFive.addEventListener("click", () => {
  imageToToggleFive.classList.toggle("hidden");
  textToToggleFive.classList.toggle("hidden");
  btnToToggleFive.classList.toggle("hidden");
  toggleCompFive.classList.add("setup-p-bg");

  imageToToggleTwo.classList.add("hidden");
  textToToggleTwo.classList.add("hidden");
  btnToToggleTwo.classList.add("hidden");
  toggleCompTwo.classList.remove("setup-p-bg");

  imageToToggleThree.classList.add("hidden");
  textToToggleThree.classList.add("hidden");
  btnToToggleThree.classList.add("hidden");
  toggleCompThree.classList.remove("setup-p-bg");

  imageToToggleFour.classList.add("hidden");
  textToToggleFour.classList.add("hidden");
  btnToToggleFour.classList.add("hidden");
  toggleCompFour.classList.remove("setup-p-bg");

  imageToToggleOne.classList.add("hidden");
  textToToggleOne.classList.add("hidden");
  btnToToggleOne.classList.add("hidden");
  toggleCompOne.classList.remove("setup-p-bg");
});

//Load and marked toggle two
const circleFive = document.getElementById("setup-sect-circle-five");
const loadingFive = document.getElementById("setup-sect-load-five");
const markFive = document.getElementById("setup-sect-mark-five");

circleFive.addEventListener("click", () => {
  circleFive.classList.add("hidden");
  loadingFive.classList.remove("hidden");
  setTimeout(() => {
    loadingFive.classList.add("hidden");
    markFive.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
});

markFive.addEventListener("click", () => {
  markFive.classList.add("hidden");
  circleFive.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
});

//Toggle Profile Menu Bar
const profileToggleButton = document.getElementById("profile");
const profileMenu = document.getElementById("profile-menu");

profileToggleButton.addEventListener("click", () => {
  profileMenu.classList.toggle("hidden");
  notMenu.classList.add("hidden");
});

//Hide ad bar
const adBar = document.getElementById("ad");
const cancel = document.getElementById("cancel");

cancel.addEventListener("click", () => {
  adBar.style.display = "none";
});

const progressBar = document.getElementById("progress-bar");
const updateProgressBar = () => {
  const counterValue = parseInt(setupCounter.innerText);
  const maxWidth = 5; // Set your desired maximum width
  const percentage = (counterValue / maxWidth) * 100;
  progressBar.style.width = percentage + "%";
};
updateProgressBar();
setupCounter.addEventListener("DOMSubtreeModified", updateProgressBar);

//Toggle Notification menu
const notToggleBtn = document.getElementById("notification-icon");
const notMenu = document.getElementById("notification-box");

notToggleBtn.addEventListener("click", () => {
  notMenu.classList.toggle("hidden");
  profileMenu.classList.add("hidden");
});

//Handling click for Profile menu items
const brOne = document.getElementById("blue-br-one");
const brTwo = document.getElementById("blue-br-two");
const brThree = document.getElementById("blue-br-three");
const brFour = document.getElementById("blue-br-four");
const brFive = document.getElementById("blue-br-five");

brOne.addEventListener("click", () => {
  brOne.classList.toggle("active-pmi");
  brTwo.classList.remove("active-pmi");
  brThree.classList.remove("active-pmi");
  brFour.classList.remove("active-pmi");
  brFive.classList.remove("active-pmi");
});

brTwo.addEventListener("click", () => {
  brOne.classList.remove("active-pmi");
  brTwo.classList.toggle("active-pmi");
  brThree.classList.remove("active-pmi");
  brFour.classList.remove("active-pmi");
  brFive.classList.remove("active-pmi");
});

brThree.addEventListener("click", () => {
  brOne.classList.remove("active-pmi");
  brTwo.classList.remove("active-pmi");
  brThree.classList.toggle("active-pmi");
  brFour.classList.remove("active-pmi");
  brFive.classList.remove("active-pmi");
});

brFour.addEventListener("click", () => {
  brOne.classList.remove("active-pmi");
  brTwo.classList.remove("active-pmi");
  brThree.classList.remove("active-pmi");
  brFour.classList.toggle("active-pmi");
  brFive.classList.remove("active-pmi");
});

brFive.addEventListener("click", () => {
  brOne.classList.remove("active-pmi");
  brTwo.classList.remove("active-pmi");
  brThree.classList.remove("active-pmi");
  brFour.classList.remove("active-pmi");
  brFive.classList.toggle("active-pmi");
});
