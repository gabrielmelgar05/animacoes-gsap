// timeline pausada (espera carregar tudo)
const tl = gsap.timeline({ paused: true });

// animação da logo (carregando)
tl.to(".logo.reveal", {
    clipPath: "inset(0% 0 0 0)",
    duration: 2,
    ease: "power4.out"
});

// glow quando completa
tl.to(".logo.reveal", {
    filter: "drop-shadow(0 0 20px #fff)",
    duration: 0.4
}, "-=0.5");

// leve zoom
tl.to(".logo-wrapper", {
    scale: 1.2,
    duration: 0.6,
    ease: "power2.out"
});

// fade out do preloader
tl.to(".logo-wrapper", {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
        document.querySelector(".logo-wrapper").style.display = "none";
    }
});

// mostra o conteúdo
tl.to(".content", {
    opacity: 1,
    duration: 1
});

// só inicia quando tudo carregar
window.addEventListener("load", () => {
    tl.play();
});
