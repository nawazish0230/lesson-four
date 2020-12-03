var translateBtn = document.querySelector("#translate-btn");
var myTextarea = document.querySelector("#my-textarea");
var displayResult = document.querySelector("#display-result");
var errorText = document.querySelector("#error-text");

function modifiedUrl(url) {
  return (
    "https://api.funtranslations.com/translate/minion.json?" + "text=" + url
  );
}

function errorHandler() {
  errorText.innerHTML = "Error in the API";
}

function clickHandler() {
  console.log(myTextarea.value);
  const newUrl = modifiedUrl(myTextarea.value);
  fetch(newUrl)
    .then((res) => res.json())
    .then((res) => {
      displayResult.innerHTML = res.contents.translated;
    })
    .catch((err) => errorHandler());
}

translateBtn.addEventListener("click", clickHandler);
