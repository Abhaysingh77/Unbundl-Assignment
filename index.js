let slider = document.getElementsByClassName("slider");
 const dragging = (e) => {
    slider[0].scrollLeft = e.pageX;
 }

slider[0].addEventListener('mousemove',dragging);
