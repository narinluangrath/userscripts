// ==UserScript==
// @name Business Insider Adblock Bypass
// @version 1.0
// @match https://www.businessinsider.com/*
// ==/UserScript==

(function () {
  document.getElementsByClassName("tp-modal")[0].remove()
  document.getElementsByClassName("tp-backdrop tp-active")[0].remove()
  document.body.setAttribute("style", "overflow: unset !important;")
})()