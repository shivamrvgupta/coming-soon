const scriptURL = 'https://script.google.com/macros/s/AKfycbzjaOTYD0DCKQmD3LYSkAdPDuy4BvA7HGLcCIY1JI1YX03Ga0GFTAnjVEn5VyfWTT2e/exec'
const form = document.forms['submit-to-google-sheet-subs']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Subscribed Successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => {
      msg.innerHTML = "There is Error, Please Check the values again"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
})