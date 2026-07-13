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

function markDone(btn) {
  btn.classList.toggle('active');
  btn.closest('.one-choice').classList.toggle('done');
}

// Завантаження стану кнопок
window.onload = function () {
    const buttons = document.querySelectorAll(".buttons-click");

    buttons.forEach((button, index) => {
        if (localStorage.getItem("button" + index) === "done") {
            button.classList.add("done");
        }
    });
};



function markDone(button) {
    const card = button.closest(".one-choice");
    const cards = document.querySelectorAll(".one-choice");
    const index = [...cards].indexOf(card);

    card.classList.toggle("done");
    button.classList.toggle("done"); // ← додаємо клас кнопці

    if (card.classList.contains("done")) {
        localStorage.setItem("card" + index, "done");
    } else {
        localStorage.removeItem("card" + index);
    }
}

window.onload = function () {
    const cards = document.querySelectorAll(".one-choice");

    cards.forEach((card, index) => {
        const button = card.querySelector(".buttons-click");

        if (localStorage.getItem("card" + index) === "done") {
            card.classList.add("done");
            button.classList.add("done"); // ← відновлюємо зелений стан кнопки
        }
    });
};