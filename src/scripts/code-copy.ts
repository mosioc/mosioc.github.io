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

    let feedbackTimeout: number | undefined;
    let announcementTimeout: number | undefined;
    let latestCopyRequest = 0;

    button.addEventListener("click", async () => {
      const copyRequest = ++latestCopyRequest;

      if (feedbackTimeout !== undefined) {
        window.clearTimeout(feedbackTimeout);
      }
      if (announcementTimeout !== undefined) {
        window.clearTimeout(announcementTimeout);
      }

      status.textContent = "";

      let announcement: string;
      let copied = false;
      try {
        await navigator.clipboard.writeText(code.textContent ?? "");
        copied = true;
        announcement = "Code copied to clipboard.";
      } catch {
        announcement = "Copy failed. Select the code and copy it manually.";
      }

      if (copyRequest !== latestCopyRequest) return;

      button.textContent = copied ? "Copied" : "Copy failed";
      button.setAttribute("aria-label", copied ? "Code copied" : "Copy failed");

      announcementTimeout = window.setTimeout(() => {
        if (copyRequest !== latestCopyRequest) return;
        status.textContent = announcement;
        announcementTimeout = undefined;
      }, 0);

      feedbackTimeout = window.setTimeout(() => {
        if (copyRequest !== latestCopyRequest) return;
        button.textContent = "Copy";
        button.setAttribute("aria-label", "Copy code");
        status.textContent = "";
        feedbackTimeout = undefined;
      }, 2000);
    });

    wrapper.prepend(button);
    wrapper.append(status);
  });
}

document.addEventListener("astro:page-load", addCodeCopyButtons);
addCodeCopyButtons();
