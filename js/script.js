function rotateArrow(sum) {
  let summarys = document.querySelectorAll("summary");

  for (let s of summarys) {
    if (s === sum) {
      toggleActiveState(s);
      continue;
    }

    if (s.classList.contains("fw-700")) {
      toggleActiveState(s);
      s.parentElement.open = false;
    }
  }
}

function toggleActiveState(summary) {
  let arrow = summary.querySelector(".details-marker");
  arrow.classList.toggle("rotate180");
  summary.classList.toggle("text--dark");
  summary.classList.toggle("fw-700");
}
