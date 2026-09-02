/* CARRYBYTE BUSINESS RESILIENCE BREAKFAST SITE INTERACTIONS */


/* FORCE PAGE TO START AT TOP */

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

/* GOOGLE FORM */

const RSVP_FORM_URL =
  "https://forms.gle/WCKbMwbNZa5zjAJn8";


/* RSVP LINKS */

document
  .querySelectorAll(".js-rsvp-link")
  .forEach(function (link) {

    link.setAttribute(
      "href",
      RSVP_FORM_URL
    );

    /*
      Always open registration in a new tab.
    */

    link.setAttribute(
      "target",
      "_blank"
    );

    link.setAttribute(
      "rel",
      "noopener noreferrer"
    );

  });


/* ALL EXTERNAL LINKS
   Any external link on the website automatically opens in a new browser tab. Internal #section links continue opening normally.*/

document
  .querySelectorAll("a[href]")
  .forEach(function (link) {

    const href = link.getAttribute("href");

    if (
      href &&
      (
        href.startsWith("http://") ||
        href.startsWith("https://")
      )
    ) {

      link.setAttribute(
        "target",
        "_blank"
      );

      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );

    }

  });


/* MOBILE NAVIGATION */

const menuButton =
  document.querySelector(
    ".mobile-menu-toggle"
  );

const mobileNav =
  document.querySelector(
    ".mobile-nav"
  );


if (
  menuButton &&
  mobileNav
) {

  menuButton.addEventListener(
    "click",
    function () {

      const isOpen =
        menuButton.getAttribute(
          "aria-expanded"
        ) === "true";


      menuButton.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );


      mobileNav.classList.toggle(
        "is-open"
      );

    }
  );


  /*
    Close mobile navigation after
    selecting an internal section.
  */

  mobileNav
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(function (link) {

      link.addEventListener(
        "click",
        function () {

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

          mobileNav.classList.remove(
            "is-open"
          );

        }
      );

    });

}


/* THEME TOGGLE
   The initial theme is already set (before paint) by the inline
   script in <head>. This section wires up the toggle buttons,
   keeps both the desktop and mobile buttons in sync, and stores
   the person's choice for their next visit. */

const THEME_KEY = "carrybyte-theme";

const themeButtons = [
  document.getElementById("themeToggle"),
  document.getElementById("themeToggleMobile"),
].filter(Boolean);

function getCurrentTheme() {

  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";

}

function setTheme(theme) {

  document.documentElement.setAttribute("data-theme", theme);

  try {

    localStorage.setItem(THEME_KEY, theme);

  } catch (e) {

    /* Storage unavailable — theme still applies for this visit. */

  }

  themeButtons.forEach(function (button) {

    button.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );

  });

}

/* Sync the aria-label on load with whatever the inline script chose. */

setTheme(getCurrentTheme());

themeButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    setTheme(getCurrentTheme() === "light" ? "dark" : "light");

  });

});


/* ESC KEY CLOSES MOBILE MENU */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape" &&
      mobileNav
    ) {

      mobileNav.classList.remove(
        "is-open"
      );

      if (menuButton) {

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }

  }
);