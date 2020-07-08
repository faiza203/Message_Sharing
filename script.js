const messageForm = document.querySelector("form");
const messageShow = document.getElementById("message-show");
const linkForm = document.getElementById("link")
const input = document.getElementById("message-input");
const link = document.getElementById("link-input");
const {hash} = window.location;
const message = atob(hash.replace('#',''));
if (message) {
    messageForm.classList.add('hide');
    messageShow.classList.remove('hide');
    document.querySelector('h1').innerHTML = message;
  }
messageForm.addEventListener("submit" , event =>{
    event.preventDefault();
    messageForm.classList.add("hide");
    linkForm.classList.remove("hide");
    const secretMessage = btoa(input.value);
    link.value = `${ window.location}#${secretMessage}`;
    link.select();
});