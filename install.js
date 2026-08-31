(function () {
  "use strict";

  const STORAGE_KEY = "ancla-dbt-install-dismissed-at";
  const DAYS_TO_HIDE_AFTER_DISMISS = 14;

  const toast = document.getElementById("install-toast");
  const msgEl = document.getElementById("install-toast-msg");
  const actionBtn = document.getElementById("install-toast-action");
  const closeBtn = document.getElementById("install-toast-close");

  if (!toast || !msgEl || !actionBtn || !closeBtn) return;

  function isStandalone() {
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    );
  }

  function recentlyDismissed() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;
    const daysSince = (Date.now() - Number(stored)) / 86400000;
    return daysSince < DAYS_TO_HIDE_AFTER_DISMISS;
  }

  function markHandled() {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  }

  function hideToast() {
    toast.classList.remove("show");
  }

  function showToast() {
    toast.classList.add("show");
  }

  closeBtn.addEventListener("click", () => {
    markHandled();
    hideToast();
  });

  if (isStandalone() || recentlyDismissed()) return;

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;

  if (isIOS) {
    msgEl.textContent = 'Para instalar Ancla: toca Compartir y luego "Agregar a pantalla de inicio".';
    actionBtn.style.display = "none";
    setTimeout(showToast, 500);
    return;
  }

  let deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    msgEl.textContent = "Instala Ancla en tu pantalla de inicio para abrirla sin conexión, como una app.";
    actionBtn.style.display = "";
    showToast();
  });

  actionBtn.addEventListener("click", async () => {
    if (!deferredPrompt) {
      hideToast();
      return;
    }
    hideToast();
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    deferredPrompt = null;
    if (choice && choice.outcome === "accepted") {
      markHandled();
    }
  });

  window.addEventListener("appinstalled", () => {
    markHandled();
    hideToast();
  });
})();
