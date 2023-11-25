//Toggle code for Setup Guide arrow buttons
const toggleOpen = document.getElementById("t-open");
const toggleClose = document.getElementById("t-close");
const contentToToggle = document.getElementById("setup-sect");
const setupCounter = document.getElementById("setup-counter");
const keyboardSetupToggle = document.getElementById("dropdownButton");

let i = parseInt(setupCounter.innerText);
setupCounter.innerText = i;

let dropDownOpen = false;

const openSetupDropdownHandler = () => {
  toggleOpen.classList.add("hidden");
  toggleClose.classList.remove("hidden");
  contentToToggle.classList.remove("hidden");

  dropDownOpen = true;
};

toggleOpen.addEventListener("click", () => {
  openSetupDropdownHandler();
  keyboardSetupToggle.style.backgroundColor = "#F0F0F0";
});

keyboardSetupToggle.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!dropDownOpen) {
      openSetupDropdownHandler();
    } else {
      closeSetupDropDownHandler();
    }
  }
});

const closeSetupDropDownHandler = () => {
  toggleClose.classList.add("hidden");
  toggleOpen.classList.remove("hidden");
  contentToToggle.classList.add("hidden");

  imageToToggleTwo.classList.add("hidden");
  textToToggleTwo.classList.add("hidden");
  setupTwo.classList.remove("setup-p-bg");
  btnToToggleTwo.classList.add("hidden");
  btnToToggleSix.classList.add("hidden");

  imageToToggleOne.classList.add("hidden");
  textToToggleOne.classList.add("hidden");
  setupOne.classList.remove("setup-p-bg");
  btnToToggleOne.classList.add("hidden");

  imageToToggleThree.classList.add("hidden");
  textToToggleThree.classList.add("hidden");
  setupThree.classList.remove("setup-p-bg");
  btnToToggleThree.classList.add("hidden");

  imageToToggleFour.classList.add("hidden");
  textToToggleFour.classList.add("hidden");
  setupFour.classList.remove("setup-p-bg");
  btnToToggleFour.classList.add("hidden");

  imageToToggleFive.classList.add("hidden");
  textToToggleFive.classList.add("hidden");
  setupFive.classList.remove("setup-p-bg");
  btnToToggleFive.classList.add("hidden");

  dropDownOpen = false;
};

toggleClose.addEventListener("click", () => {
  closeSetupDropDownHandler();
  keyboardSetupToggle.style.backgroundColor = "";
});

//Toggle code for each setup

// For Customize Online Store
const imageToToggleOne = document.getElementById("setup-sect-img-one");
const textToToggleOne = document.getElementById("setup-sect-text-one");
const btnToToggleOne = document.getElementById("setup-sect-btn-one");
const toggleCompOne = document.getElementById("setup-sect-one");
const setupOne = document.getElementById("setupOne");

const handleSetupOneToggle = () => {
  imageToToggleOne.classList.toggle("hidden");
  textToToggleOne.classList.toggle("hidden");
  btnToToggleOne.classList.toggle("hidden");
  // toggleCompOne.classList.toggle("setup-p-bg");
  setupOne.classList.toggle("setup-p-bg");

  imageToToggleTwo.classList.add("hidden");
  textToToggleTwo.classList.add("hidden");
  btnToToggleTwo.classList.add("hidden");
  btnToToggleSix.classList.add("hidden");
  setupTwo.classList.remove("setup-p-bg");

  imageToToggleThree.classList.add("hidden");
  textToToggleThree.classList.add("hidden");
  btnToToggleThree.classList.add("hidden");
  setupThree.classList.remove("setup-p-bg");

  imageToToggleFour.classList.add("hidden");
  textToToggleFour.classList.add("hidden");
  btnToToggleFour.classList.add("hidden");
  setupFour.classList.remove("setup-p-bg");

  imageToToggleFive.classList.add("hidden");
  textToToggleFive.classList.add("hidden");
  btnToToggleFive.classList.add("hidden");
  setupFive.classList.remove("setup-p-bg");
};
toggleCompOne.addEventListener("click", () => {
  handleSetupOneToggle();
});

setupOne.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSetupOneToggle();
  }
});

//Load and marked toggle one
const circleOne = document.getElementById("setup-sect-circle-one");
const circleFocOne = document.getElementById("circleOne");
const loadingOne = document.getElementById("setup-sect-load-one");
const markOne = document.getElementById("setup-sect-mark-one");

let mark1 = false;
const loadMarkOneToggle = () => {
  circleOne.classList.add("hidden");
  loadingOne.classList.remove("hidden");
  setTimeout(() => {
    loadingOne.classList.add("hidden");
    markOne.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
    // i = setupCounter.innerText;
  }, 500);
  mark1 = true;
};

circleOne.addEventListener("click", () => {
  loadMarkOneToggle();
  if (!mark2) {
    handleSetupTwoToggle();
  }
});

circleFocOne.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!mark1) {
      loadMarkOneToggle();
      if (!mark2) {
        handleSetupTwoToggle();
      }
    } else {
      markOne.classList.add("hidden");
      circleOne.classList.remove("hidden");
      i = i - 1;
      setupCounter.innerText = i;
      mark1 = false;
    }
  }
});

markOne.addEventListener("click", () => {
  markOne.classList.add("hidden");
  circleOne.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
  mark1 = false;
  //   i = setupCounter.innerText;
});

// For Add your first product
const imageToToggleTwo = document.getElementById("setup-sect-img-two");
const textToToggleTwo = document.getElementById("setup-sect-text-two");
const btnToToggleTwo = document.getElementById("setup-sect-btn-two");
const btnToToggleSix = document.getElementById("setup-sect-btn-six");
const toggleCompTwo = document.getElementById("setup-sect-two");
const setupTwo = document.getElementById("setupTwo");

const handleSetupTwoToggle = () => {
  imageToToggleTwo.classList.toggle("hidden");
  textToToggleTwo.classList.toggle("hidden");
  btnToToggleTwo.classList.toggle("hidden");
  btnToToggleSix.classList.toggle("hidden");
  setupTwo.classList.toggle("setup-p-bg");

  imageToToggleOne.classList.add("hidden");
  textToToggleOne.classList.add("hidden");
  btnToToggleOne.classList.add("hidden");
  setupOne.classList.remove("setup-p-bg");

  imageToToggleThree.classList.add("hidden");
  textToToggleThree.classList.add("hidden");
  btnToToggleThree.classList.add("hidden");
  setupThree.classList.remove("setup-p-bg");

  imageToToggleFour.classList.add("hidden");
  textToToggleFour.classList.add("hidden");
  btnToToggleFour.classList.add("hidden");
  setupFour.classList.remove("setup-p-bg");

  imageToToggleFive.classList.add("hidden");
  textToToggleFive.classList.add("hidden");
  btnToToggleFive.classList.add("hidden");
  setupFive.classList.remove("setup-p-bg");
};

toggleCompTwo.addEventListener("click", () => {
  handleSetupTwoToggle();
});

setupTwo.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSetupTwoToggle();
  }
});

//Load and marked toggle two
const circleTwo = document.getElementById("setup-sect-circle-two");
const circleFocTwo = document.getElementById("circleTwo");
const loadingTwo = document.getElementById("setup-sect-load-two");
const markTwo = document.getElementById("setup-sect-mark-two");
let mark2 = false;

circleTwo.addEventListener("click", () => {
  circleTwo.classList.add("hidden");
  loadingTwo.classList.remove("hidden");
  setTimeout(() => {
    loadingTwo.classList.add("hidden");
    markTwo.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
  mark2 = true;
  if (!mark3) {
    handleSetupThreeToggle();
  }
});

circleFocTwo.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!mark2) {
      circleTwo.classList.add("hidden");
      loadingTwo.classList.remove("hidden");
      setTimeout(() => {
        loadingTwo.classList.add("hidden");
        markTwo.classList.remove("hidden");
        i = i + 1;
        setupCounter.innerText = i;
      }, 500);
      mark2 = true;
      if (!mark3) {
        handleSetupThreeToggle();
      }
    } else {
      markTwo.classList.add("hidden");
      circleTwo.classList.remove("hidden");
      i = i - 1;
      setupCounter.innerText = i;
      mark2 = false;
    }
  }
});

markTwo.addEventListener("click", () => {
  markTwo.classList.add("hidden");
  circleTwo.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
  mark2 = false;
});

// For Add a custom domain
const imageToToggleThree = document.getElementById("setup-sect-img-three");
const textToToggleThree = document.getElementById("setup-sect-text-three");
const btnToToggleThree = document.getElementById("setup-sect-btn-three");
const toggleCompThree = document.getElementById("setup-sect-three");
const setupThree = document.getElementById("setupThree");

const handleSetupThreeToggle = () => {
  imageToToggleThree.classList.toggle("hidden");
  textToToggleThree.classList.toggle("hidden");
  btnToToggleThree.classList.toggle("hidden");
  setupThree.classList.toggle("setup-p-bg");

  imageToToggleOne.classList.add("hidden");
  textToToggleOne.classList.add("hidden");
  btnToToggleOne.classList.add("hidden");
  // toggleCompOne.classList.remove("setup-p-bg");
  setupOne.classList.remove("setup-p-bg");

  imageToToggleTwo.classList.add("hidden");
  textToToggleTwo.classList.add("hidden");
  btnToToggleTwo.classList.add("hidden");
  btnToToggleSix.classList.add("hidden");
  setupTwo.classList.remove("setup-p-bg");

  imageToToggleFour.classList.add("hidden");
  textToToggleFour.classList.add("hidden");
  btnToToggleFour.classList.add("hidden");
  setupFour.classList.remove("setup-p-bg");

  imageToToggleFive.classList.add("hidden");
  textToToggleFive.classList.add("hidden");
  btnToToggleFive.classList.add("hidden");
  setupFive.classList.remove("setup-p-bg");
};

toggleCompThree.addEventListener("click", () => {
  handleSetupThreeToggle();
});

setupThree.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSetupThreeToggle();
  }
});

//Load and marked toggle three
const circleThree = document.getElementById("setup-sect-circle-three");
const circleFocThree = document.getElementById("circleThree");
const loadingThree = document.getElementById("setup-sect-load-three");
const markThree = document.getElementById("setup-sect-mark-three");
let mark3 = false;

circleThree.addEventListener("click", () => {
  circleThree.classList.add("hidden");
  loadingThree.classList.remove("hidden");
  setTimeout(() => {
    loadingThree.classList.add("hidden");
    markThree.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
  mark3 = true;
  if (!mark4) {
    handleSetupFourToggle();
  }
});

circleFocThree.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!mark3) {
      circleThree.classList.add("hidden");
      loadingThree.classList.remove("hidden");
      setTimeout(() => {
        loadingThree.classList.add("hidden");
        markThree.classList.remove("hidden");
        i = i + 1;
        setupCounter.innerText = i;
      }, 500);
      mark3 = true;
      if (!mark4) {
        handleSetupFourToggle();
      }
    } else {
      markThree.classList.add("hidden");
      circleThree.classList.remove("hidden");
      i = i - 1;
      setupCounter.innerText = i;
      mark3 = false;
    }
  }
});

markThree.addEventListener("click", () => {
  markThree.classList.add("hidden");
  circleThree.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
  mark3 = false;
});

// For Name your store
const imageToToggleFour = document.getElementById("setup-sect-img-four");
const textToToggleFour = document.getElementById("setup-sect-text-four");
const btnToToggleFour = document.getElementById("setup-sect-btn-four");
const toggleCompFour = document.getElementById("setup-sect-four");
const setupFour = document.getElementById("setupFour");

const handleSetupFourToggle = () => {
  imageToToggleFour.classList.toggle("hidden");
  textToToggleFour.classList.toggle("hidden");
  btnToToggleFour.classList.toggle("hidden");
  setupFour.classList.toggle("setup-p-bg");

  imageToToggleOne.classList.add("hidden");
  textToToggleOne.classList.add("hidden");
  btnToToggleOne.classList.add("hidden");
  // toggleCompOne.classList.remove("setup-p-bg");
  setupOne.classList.remove("setup-p-bg");

  imageToToggleTwo.classList.add("hidden");
  textToToggleTwo.classList.add("hidden");
  btnToToggleTwo.classList.add("hidden");
  btnToToggleSix.classList.add("hidden");
  setupTwo.classList.remove("setup-p-bg");

  imageToToggleThree.classList.add("hidden");
  textToToggleThree.classList.add("hidden");
  btnToToggleThree.classList.add("hidden");
  setupThree.classList.remove("setup-p-bg");

  imageToToggleFive.classList.add("hidden");
  textToToggleFive.classList.add("hidden");
  btnToToggleFive.classList.add("hidden");
  setupFive.classList.remove("setup-p-bg");
};

toggleCompFour.addEventListener("click", () => {
  handleSetupFourToggle();
});

setupFour.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSetupFourToggle();
  }
});

//Load and marked toggle four
const circleFour = document.getElementById("setup-sect-circle-four");
const circleFocFour = document.getElementById("circleFour");
const loadingFour = document.getElementById("setup-sect-load-four");
const markFour = document.getElementById("setup-sect-mark-four");
let mark4 = false;

circleFour.addEventListener("click", () => {
  circleFour.classList.add("hidden");
  loadingFour.classList.remove("hidden");
  setTimeout(() => {
    loadingFour.classList.add("hidden");
    markFour.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
  mark4 = true;
  if (!mark5) {
    handleSetupFiveToggle();
  }
});

circleFocFour.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!mark4) {
      circleFour.classList.add("hidden");
      loadingFour.classList.remove("hidden");
      setTimeout(() => {
        loadingFour.classList.add("hidden");
        markFour.classList.remove("hidden");
        i = i + 1;
        setupCounter.innerText = i;
      }, 500);
      mark4 = true;
      if (!mark5) {
        handleSetupFiveToggle();
      }
    } else {
      markFour.classList.add("hidden");
      circleFour.classList.remove("hidden");
      i = i - 1;
      setupCounter.innerText = i;
      mark4 = false;
    }
  }
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
const setupFive = document.getElementById("setupFive");

const handleSetupFiveToggle = () => {
  imageToToggleFive.classList.toggle("hidden");
  textToToggleFive.classList.toggle("hidden");
  btnToToggleFive.classList.toggle("hidden");
  setupFive.classList.toggle("setup-p-bg");

  imageToToggleTwo.classList.add("hidden");
  textToToggleTwo.classList.add("hidden");
  btnToToggleTwo.classList.add("hidden");
  btnToToggleSix.classList.add("hidden");
  setupTwo.classList.remove("setup-p-bg");

  imageToToggleThree.classList.add("hidden");
  textToToggleThree.classList.add("hidden");
  btnToToggleThree.classList.add("hidden");
  setupThree.classList.remove("setup-p-bg");

  imageToToggleFour.classList.add("hidden");
  textToToggleFour.classList.add("hidden");
  btnToToggleFour.classList.add("hidden");
  setupFour.classList.remove("setup-p-bg");

  imageToToggleOne.classList.add("hidden");
  textToToggleOne.classList.add("hidden");
  btnToToggleOne.classList.add("hidden");
  // toggleCompOne.classList.remove("setup-p-bg");
  setupOne.classList.remove("setup-p-bg");
};

toggleCompFive.addEventListener("click", () => {
  handleSetupFiveToggle();
});

setupFive.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSetupFiveToggle();
  }
});

//Load and marked toggle two
const circleFive = document.getElementById("setup-sect-circle-five");
const circleFocFive = document.getElementById("circleFive");
const loadingFive = document.getElementById("setup-sect-load-five");
const markFive = document.getElementById("setup-sect-mark-five");
let mark5 = false;

circleFive.addEventListener("click", () => {
  circleFive.classList.add("hidden");
  loadingFive.classList.remove("hidden");
  setTimeout(() => {
    loadingFive.classList.add("hidden");
    markFive.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
  mark5 = true;
  if (!mark1) {
    handleSetupOneToggle();
  }
});

circleFocFive.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!mark5) {
      circleFive.classList.add("hidden");
      loadingFive.classList.remove("hidden");
      setTimeout(() => {
        loadingFive.classList.add("hidden");
        markFive.classList.remove("hidden");
        i = i + 1;
        setupCounter.innerText = i;
      }, 500);
      mark5 = true;
      if (!mark1) {
        handleSetupOneToggle();
      }
    } else {
      markFive.classList.add("hidden");
      circleFive.classList.remove("hidden");
      i = i - 1;
      setupCounter.innerText = i;
      mark5 = false;
    }
  }
});

markFive.addEventListener("click", () => {
  markFive.classList.add("hidden");
  circleFive.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
  mark5 = false;
});

//Toggle Profile Menu Bar
const profileToggleButton = document.getElementById("profile");
const profileMenu = document.getElementById("profile-menu");

const dropDownToggleHandler = () => {
  notToggleBtn.style.backgroundColor = "";
  profileMenu.classList.toggle("hidden");
  profileMenu.style.display = "flex";
  notMenu.classList.add("hidden");

  if (!profileMenu.classList.contains("hidden")) {
    profileToggleButton.style.backgroundColor = "#656266";
  } else {
    profileToggleButton.style.backgroundColor = "";
    profileMenu.style.display = "none";
  }

  brOne.classList.remove("active-pmi");
  brTwo.classList.remove("active-pmi");
  brThree.classList.remove("active-pmi");
  brFour.classList.remove("active-pmi");
  brFive.classList.remove("active-pmi");
  liOne.classList.add("active-pmi");
  liTwo.classList.remove("active-pmi");
  liNine.classList.remove("active-pmi");
  liTen.classList.remove("active-pmi");
};

profileToggleButton.addEventListener("click", dropDownToggleHandler);

profileToggleButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    dropDownToggleHandler;
  }
});

// Add event listeners to make menu items toggleable on Enter keypress
const menuItems = profileMenu.querySelectorAll('[role="menuitem"]');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      // Toggle the state or perform any other action
      console.log(`Item ${menuItem.id} clicked on Enter`);
    }
  });
});

//Hide ad bar
const adBar = document.getElementById("ad");
const cancel = document.getElementById("cancel");

cancel.addEventListener("click", () => {
  adBar.style.display = "none";
});

cancel.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    adBar.style.display = "none";
  }
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

notToggleBtn.addEventListener("keydown", function (event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.key === "Enter") {
    // Trigger the click event
    profileMenu.style.display = "none";
    profileToggleButton.style.backgroundColor = "";
    notMenu.classList.toggle("hidden");

    if (!notMenu.classList.contains("hidden")) {
      notToggleBtn.style.backgroundColor = "#656266";
    } else {
      notToggleBtn.style.backgroundColor = "";
    }
  }
});

notToggleBtn.addEventListener("click", () => {
  profileMenu.style.display = "none";
  profileToggleButton.style.backgroundColor = "";
  notMenu.classList.toggle("hidden");

  if (!notMenu.classList.contains("hidden")) {
    notToggleBtn.style.backgroundColor = "#656266";
  } else {
    notToggleBtn.style.backgroundColor = "";
  }
});

// Handling click for Profile menu items
const brOne = document.getElementById("blue-br-one");
const brTwo = document.getElementById("blue-br-two");
const brThree = document.getElementById("blue-br-three");
const brFour = document.getElementById("blue-br-four");
const brFive = document.getElementById("blue-br-five");
const liOne = document.getElementById("pm-name");
const liTwo = document.getElementById("all-s");
const liNine = document.getElementById("yellow-br-two");
const liTen = document.getElementById("yellow-br-three");

function toggleActive(element) {
  brOne.classList.remove("active-pmi");
  brTwo.classList.remove("active-pmi");
  brThree.classList.remove("active-pmi");
  brFour.classList.remove("active-pmi");
  brFive.classList.remove("active-pmi");
  liOne.classList.remove("active-pmi");
  liTwo.classList.remove("active-pmi");
  liNine.classList.remove("active-pmi");
  liTen.classList.remove("active-pmi");

  element.classList.toggle("active-pmi");
  profileMenu.style.display = "none";
  profileToggleButton.style.backgroundColor = "";
}

brOne.addEventListener("click", () => toggleActive(brOne));
brTwo.addEventListener("click", () => toggleActive(brTwo));
brThree.addEventListener("click", () => toggleActive(brThree));
brFour.addEventListener("click", () => toggleActive(brFour));
brFive.addEventListener("click", () => toggleActive(brFive));
liOne.addEventListener("click", () => toggleActive(liOne));
liTwo.addEventListener("click", () => toggleActive(liTwo));
liNine.addEventListener("click", () => toggleActive(liNine));
liTen.addEventListener("click", () => toggleActive(liTen));

//Button Click Handler
const btnClickHandler = (item) => {
  item.classList.toggle("btnClick");
};

btnToToggleOne.addEventListener("click", btnClickHandler(btnToToggleOne));
btnToToggleTwo.addEventListener("click", btnClickHandler(btnToToggleTwo));
btnToToggleThree.addEventListener("click", btnClickHandler(btnToToggleThree));
btnToToggleFour.addEventListener("click", btnClickHandler(btnToToggleFour));
btnToToggleFive.addEventListener("click", btnClickHandler(btnToToggleFive));
