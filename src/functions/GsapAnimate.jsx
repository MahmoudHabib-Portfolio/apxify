import gsap from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export const MainNav = (elem) => {
    gsap.from(elem, {
        y: "-100%",
        position: "none",
        background: "transparent",
        autoAlpha: 0,
        duration: 1,
        ease: 'back.inOut',
        stagger: 0.1,
    })

    gsap.to(elem, {
        y: "0%",
        position: "sticky",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        top: "0px",
        background: "#000",
        autoAlpha: 1,
        duration: 1,
        ease: 'back.inOut',
        stagger: 0.1,
    })
}

/* OnScroll Main-Nav To Change bgColor*/
export const ScrollToMainNav = (elem, navScroll) => {
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            once: true,
            start: "top center",
            end: "0px 50%",
            toggleActions: "reset",
            onEnter: () => MainNav(navScroll)
        },
        opacity: 1,
        duration: 0.5
    })
}

