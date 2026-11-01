const copyButtonClass = "copy-code-button";

function addCodeCopyButtons() {
  document.querySelectorAll("article pre").forEach((pre) => {
    if (pre.parentElement?.classList.contains("code-copy-wrapper")) return;

    const code = pre.querySelector("code");
    if (!code) return;

    const wrapper = document.createElement("div");
    wrapper.className = "code-copy-wrapper";
    pre.before(wrapper);
    wrapper.append(pre);

    const button = document.createElement("button");
    button.type = "button";
    button.className = copyButtonClass;
    button.textContent = "Copy";
    button.setAttribute("aria-label", "Copy code");

    const status = document.createElement("span");
    status.className = "sr-only";
    status.setAttribute("aria-live", "polite");
    status.setAttribute("aria-atomic", "true");

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.textContent ?? "");
        button.textContent = "Copied";
        button.setAttribute("aria-label", "Code copied");
        status.textContent = "Code copied to clipboard.";
      } catch {
        button.textContent = "Copy failed";
        button.setAttribute("aria-label", "Copy failed");
        status.textContent =
          "Copy failed. Select the code and copy it manually.";
      }

      window.setTimeout(() => {
        button.textContent = "Copy";
        button.setAttribute("aria-label", "Copy code");
        status.textContent = "";
      }, 2000);
    });

    wrapper.prepend(button);
    wrapper.append(status);
  });
}

document.addEventListener("astro:page-load", addCodeCopyButtons);
addCodeCopyButtons();
