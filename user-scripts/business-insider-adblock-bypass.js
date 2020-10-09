(function () {
  document.getElementsByClassName("tp-modal")[0].remove()
  document.getElementsByClassName("tp-backdrop tp-active")[0].remove()
  document.body.setAttribute("style", "overflow: unset !important;")
})()