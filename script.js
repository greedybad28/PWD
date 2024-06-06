const getStartedButton = document.getElementById("splash-button");
const getStartedPage = document.getElementById("get-started-page");
const loginPage = document.getElementById("login-page")

getStartedButton.addEventListener('click', () => {
    getStartedPage.style.display = 'none';
    loginPage.style.display ='initial';
});