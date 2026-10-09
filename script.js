document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MENÚ RESPONSIVE
    ========================================= */

    const nav = document.querySelector("nav");
    const listaMenu = document.querySelector("nav ul");

    if (nav && listaMenu) {

        const botonMenu = document.createElement("button");

        botonMenu.className = "menu-btn";
        botonMenu.setAttribute("aria-label", "Abrir menú");
        botonMenu.innerHTML = "☰";

        nav.insertBefore(botonMenu, listaMenu);

        botonMenu.addEventListener("click", () => {

            const abierto = listaMenu.classList.toggle("mostrar");

            botonMenu.innerHTML = abierto ? "✕" : "☰";
            botonMenu.setAttribute(
                "aria-label",
                abierto ? "Cerrar menú" : "Abrir menú"
            );

        });


        /* Cerrar menú al seleccionar una opción */

        const enlacesMenu = listaMenu.querySelectorAll("a");

        enlacesMenu.forEach(enlace => {

            enlace.addEventListener("click", () => {

                listaMenu.classList.remove("mostrar");

                botonMenu.innerHTML = "☰";

                botonMenu.setAttribute(
                    "aria-label",
                    "Abrir menú"
                );

            });

        });

    }



    /* =========================================
       ANIMACIÓN DE TARJETAS
    ========================================= */

    const tarjetas = document.querySelectorAll(".tarjeta");

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(
            (elementos, observer) => {

                elementos.forEach(elemento => {

                    if (elemento.isIntersecting) {

                        elemento.target.classList.add("visible");

                        observer.unobserve(elemento.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        tarjetas.forEach((tarjeta, index) => {

            tarjeta.style.transitionDelay = `${index * 0.08}s`;

            observador.observe(tarjeta);

        });

    } else {

        tarjetas.forEach(tarjeta => {
            tarjeta.classList.add("visible");
        });

    }



    /* =========================================
       BOTÓN VOLVER ARRIBA
    ========================================= */

    const botonArriba = document.createElement("button");

    botonArriba.className = "arriba";
    botonArriba.innerHTML = "↑";

    botonArriba.setAttribute(
        "aria-label",
        "Volver al inicio"
    );

    document.body.appendChild(botonArriba);


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 400) {

                botonArriba.classList.add("mostrar");

            } else {

                botonArriba.classList.remove("mostrar");

            }

        },
        { passive: true }
    );


    botonArriba.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });



    /* =========================================
       EFECTO EN EL TÍTULO PRINCIPAL
    ========================================= */

    const tituloHero = document.querySelector(".hero h2");

    if (tituloHero) {

        tituloHero.addEventListener("mouseenter", () => {

            tituloHero.classList.add("titulo-activo");

        });


        tituloHero.addEventListener("mouseleave", () => {

            tituloHero.classList.remove("titulo-activo");

        });

    }



    /* =========================================
       SCROLL SUAVE
    ========================================= */

    const enlacesInternos = document.querySelectorAll(
        'a[href^="#"]'
    );

    enlacesInternos.forEach(enlace => {

        enlace.addEventListener("click", evento => {

            const destino = enlace.getAttribute("href");

            if (!destino || destino === "#") {
                return;
            }

            const elemento = document.querySelector(destino);

            if (elemento) {

                evento.preventDefault();

                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



    /* =========================================
       CONTACTO
    ========================================= */

    const botonContacto = document.querySelector(
        ".contacto .boton"
    );

    if (botonContacto) {

        botonContacto.addEventListener("click", () => {

            console.log(
                "Navegando hacia el inicio de INSUCOVAL."
            );

        });

    }



    /* =========================================
       AÑO AUTOMÁTICO DEL FOOTER
    ========================================= */

    const footer = document.querySelector("footer");

    if (footer) {

        const parrafos = footer.querySelectorAll("p");

        parrafos.forEach(parrafo => {

            parrafo.innerHTML =
                parrafo.innerHTML.replace(
                    "2026",
                    new Date().getFullYear()
                );

        });

    }



    /* =========================================
       ICONOS LUCIDE
    ========================================= */

    if (typeof lucide !== "undefined") {

        lucide.createIcons();

    }

});