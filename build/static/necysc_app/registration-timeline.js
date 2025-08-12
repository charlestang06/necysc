// registration-timeline.js
// jQuery-free version of the old timeline next/previous logic

document.addEventListener("DOMContentLoaded", function () {
  var current = 1;
  var fieldsets = Array.from(document.querySelectorAll("fieldset"));
  var steps = fieldsets.length;
  var progressbar = document.getElementById("progressbar");
  var progressItems = progressbar ? progressbar.querySelectorAll("li") : [];

  function setProgressBar(currentStep) {
    var percent = parseFloat(100 / steps) * currentStep;
    percent = percent.toFixed();
    var bar = document.querySelector(".progress-bar");
    if (bar) bar.style.width = percent + "%";
  }

  function showStep(idx) {
    fieldsets.forEach(function (fs, i) {
      fs.style.display = i === idx ? "block" : "none";
      if (progressItems[i]) {
        if (i <= idx) progressItems[i].classList.add("activeprogress");
        else progressItems[i].classList.remove("activeprogress");
      }
    });
    setProgressBar(idx + 1);
  }

  // Initial state
  showStep(0);

  document.querySelectorAll(".next-step").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var idx = fieldsets.findIndex(fs => fs.style.display === "block");
      if (idx < fieldsets.length - 1) {
        showStep(idx + 1);
      }
    });
  });

  document.querySelectorAll(".previous-step").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var idx = fieldsets.findIndex(fs => fs.style.display === "block");
      if (idx > 0) {
        showStep(idx - 1);
      }
    });
  });
});
