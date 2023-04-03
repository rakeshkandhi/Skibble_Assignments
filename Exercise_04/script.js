const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");

    const content = toggle.nextElementSibling;
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + "px";
    }
  });
});
