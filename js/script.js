function rotateArrow(sum) {
    let arrow = sum.querySelector('.details-marker');
    arrow.classList.toggle('rotate180');
    sum.classList.toggle('text--dark');
    sum.classList.toggle('fw-700');
}