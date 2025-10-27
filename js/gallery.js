window.addEventListener("load", () => {
  const title = document.querySelector(".gallery-title");
  const items = document.querySelectorAll(".gallery-item");

  title.style.opacity = 0;
  title.style.transform = "translateY(-20px)";
  items.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = "scale(0.9)";
  });

  setTimeout(() => {
    title.style.transition = "all 0.8s ease";
    title.style.opacity = 1;
    title.style.transform = "translateY(0)";
  }, 300);

  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.transition = "all 0.8s ease";
      item.style.opacity = 1;
      item.style.transform = "scale(1)";
    }, 600 + 200 * index);
  });
});

