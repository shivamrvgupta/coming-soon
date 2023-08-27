const scriptURL = 'https://script.google.com/macros/s/AKfycbyQ7Uk1pjsAbxg_VHWUCcZ2owkmc6rOF8cqSUl0FZXBwkgf1yKcgvFM_YHr2ZZWEKKOVg/exec'
const form = document.forms['submit-to-google-sheet-main']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully"
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

