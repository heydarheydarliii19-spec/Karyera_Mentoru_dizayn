// ===== Mobil menyu =====
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

function setMenu(open) {
  mainNav.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Menyunu bağla" : "Menyunu aç");
}

menuToggle.addEventListener("click", () => {
  setMenu(!mainNav.classList.contains("is-open"));
});

// Linkə klikləyəndə menyunu bağla
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Esc düyməsi ilə bağla
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

// ===== Əlaqə formu =====
const form = document.querySelector(".contact-form");
const statusText = form.querySelector(".form-status");

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function showStatus(message, type) {
  statusText.textContent = message;
  statusText.className = `form-status is-${type}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = [...form.querySelectorAll("input, textarea")];
  let valid = true;

  fields.forEach((field) => {
    const value = field.value.trim();
    const fieldOk = field.type === "email" ? isValidEmail(value) : value.length > 0;
    field.classList.toggle("is-invalid", !fieldOk);
    if (!fieldOk) valid = false;
  });

  if (!valid) {
    showStatus("Zəhmət olmasa bütün xanaları düzgün doldurun.", "error");
    return;
  }

  // Hələlik server yoxdur — yalnız uğur mesajı göstəririk
  showStatus("Təşəkkürlər! Tezliklə sizinlə əlaqə saxlayacağıq.", "success");
  form.reset();
});

// ===== Footer ili =====
document.querySelector("#il").textContent = new Date().getFullYear();
