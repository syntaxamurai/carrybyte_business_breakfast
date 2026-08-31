(function(){

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }


  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  if(!toggle || !menu) return;

  toggle.addEventListener("click", function(){

    const isOpen = menu.classList.toggle("active");

    toggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    toggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

    document.body.classList.toggle(
      "menu-open",
      isOpen
    );

  });


  menu.querySelectorAll("a").forEach(function(link){

    link.addEventListener("click", function(){

      menu.classList.remove("active");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      document.body.classList.remove(
        "menu-open"
      );

    });

  });


  window.addEventListener("resize", function(){

    if(window.innerWidth > 850){

      menu.classList.remove("active");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove(
        "menu-open"
      );

    }

  });

})();