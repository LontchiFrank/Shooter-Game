const shoot = () => {
  const bullet = document.createElement("a-sphere");
  let pos = myCamera.getAttribute("position");
  bullet.setAttribute("position", pos);
  bullet.setAttribute("velocity", getDirection(myCamera, 30));
  bullet.setAttribute("dynamic-body", 0.5);
  bullet.setAttribute("radius", 0.5);
  //   bullet.setAttribute("src", "https://i.imgur.com/H8e3Vnu.png");
  myScene.appendChild(bullet);
  bullet.addEventListener("collide", shootCollided);
};

const shootCollided = (event) => {
  if (event.detail.body.el.id === "floor") {
    event.detail.body.el.removeEventListener("collide", shootCollided);
    console.log("Hit the floor");
    myScene.removeChild(event.detail.target.el);
  } else if (event.detail.body.el.id === "target") {
    event.detail.target.el.removeEventListener("collide", shootCollided);
    console.log("Hit the target");
    myScene.removeChild(event.detail.target.el);
    myScene.removeChild(event.detail.body.el);
  }
  if (document.querySelectorAll(".target").length === "0") {
    console.log("U win");
  }
};

document.onkeydown = (event) => {
  if (event.which == 32) {
    shoot();
  }
};
