function rnd() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

const btns = document.querySelectorAll("button");
for (let btn of btns) {
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = rnd();
    btn.style.color = rnd();
    btn.style.border = "none";
    // btn.innerText = rnd().color;
  });
}
document.body.onblur = () => (document.body.style.backgroundColor = "black");
