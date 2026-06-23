const header = document.querySelector("[data-site-header]");
const copyButton = document.querySelector("[data-copy-command]");
const setupCommand = `git clone https://github.com/xelvhk/vasya_ai.git
cd vasya_ai
bash scripts/setup_mac.sh
source .venv/bin/activate
ollama pull llama3
python scripts/doctor.py
python main.py`;

function updateHeaderSurface() {
  if (!header) return;
  header.classList.toggle("is-light", window.scrollY > window.innerHeight * 0.72);
}

window.addEventListener("scroll", updateHeaderSurface, { passive: true });
updateHeaderSurface();

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(setupCommand);
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1600);
  } catch {
    copyButton.textContent = "Select text";
  }
});
