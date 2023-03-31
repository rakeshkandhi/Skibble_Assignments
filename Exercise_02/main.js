const counter = document.querySelector("#counter");
const db = document.getElementById("decrease");
const rb = document.getElementById("reset");
const ib = document.getElementById("increase");
let count = 0;
db.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});
rb.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});
ib.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
