// Show welcome alert when website loads
window.onload = function () {
  console.log("Website loaded successfully.");
  alert("Welcome to Vinayak Engineering!");
};

// Scroll to top button (optional enhancement)
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.backgroundColor = "#333";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";

document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

