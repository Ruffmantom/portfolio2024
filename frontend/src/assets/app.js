let globalUserData;
let defaultData = {
  theme: false,
};
const portfolioUser = "yjKWJlVfJPxdnRgJSYUB0LsbGdvrtC";
const theme_radio_dark = $("#theme_raadio_dark")
const theme_radio_light = $("#theme_raadio_light")

// function to save data to local storage
const saveToLocalStorage = () => {
  localStorage.setItem(portfolioUser, JSON.stringify(globalUserData));
};

const checkThemeData = () => {
  if (globalBabyData.theme === true) {
    setToDarkTheme();
  }
};

const setToDarkTheme = () => {
  $(theme_radio_dark).prop("checked", true);
  $(theme_radio_light).prop("checked", false);
  // add class to toggle
  $(".portfolio_custom_toggle").addClass("dark");
};

const checkBabyData = () => {
  let userData = localStorage.getItem(portfolioUser);

  if (userData !== null) {
    userData = JSON.parse(userData);
    if (userData) {
      globalUserData = userData;
      checkThemeData();
    } else {
      globalUserData = defaultData;
      localStorage.setItem(portfolioUser, JSON.stringify(globalUserData));
    }
  } else {
    globalUserData = defaultData;
    localStorage.setItem(portfolioUser, JSON.stringify(globalUserData));
  }
};
