function show(id){
    document.getElementById('plany').style.display = 'none';
    document.getElementById('trips').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}
window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    document.querySelectorAll("details[open]").forEach(d => {
      const card = d.closest(".one-choice");   // картка з відкритими деталями
      // якщо клікнули ПОЗА цією карткою — закрити
      if (!card.contains(e.target)) {
        d.open = false;
      }
    });
  });
});
