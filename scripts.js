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