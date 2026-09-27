import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Hero.css";
import BookingNoHeading from "../BookingNoHeading/BookingNoHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);
  const headingRefs = useRef([]);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      timeline
        .from(".hero-text h1 span", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.25,
        })
        .from(
          ".hero-para p",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-buttons div, .hero-buttons a",
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.25,
          },
          "-=0.5"
        )
        .from(
          ".hero-image-section",
          {
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.8"
        );
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const primaryBtn = primaryBtnRef.current;
    const secondaryBtn = secondaryBtnRef.current;
    const headings = [...headingRefs.current];

    const hoverIn = (element, options = {}) => {
      if (!element) return;

      gsap.to(element, {
        scale: options.scale || 1.05,
        backgroundColor: options.bg || "transparent",
        boxShadow:
          options.shadow ||
          "0px 0px 15px rgba(255, 40, 40, 0.6)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const hoverOut = (element, options = {}) => {
      if (!element) return;

      gsap.to(element, {
        scale: 1,
        backgroundColor: options.bg || "transparent",
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    const primaryEnter = () => {
      hoverIn(primaryBtn, {
        bg: "rgb(255,40,40)",
        shadow: "0px 0px 20px rgba(255,40,40,0.8)",
      });
    };

    const primaryLeave = () => {
      hoverOut(primaryBtn, {
        bg: "rgb(255,20,20)",
      });
    };

    const secondaryEnter = () => {
      hoverIn(secondaryBtn, {
        bg: "#13b84f",
        shadow: "0px 0px 15px rgba(37,211,102,0.6)",
      });
    };

    const secondaryLeave = () => {
      hoverOut(secondaryBtn, {
        bg: "#13b84f",
      });
    };

    primaryBtn?.addEventListener("mouseenter", primaryEnter);
    primaryBtn?.addEventListener("mouseleave", primaryLeave);

    secondaryBtn?.addEventListener("mouseenter", secondaryEnter);
    secondaryBtn?.addEventListener("mouseleave", secondaryLeave);

    headings.forEach((heading) => {
      if (!heading) return;

      const headingEnter = () => {
        gsap.to(heading, {
          color: "#ff2828",
          textShadow: "0px 0px 20px rgba(255,40,40,0.6)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const headingLeave = () => {
        gsap.to(heading, {
          color: "white",
          textShadow: "none",
          duration: 0.3,
          ease: "power2.inOut",
        });
      };

      heading.addEventListener("mouseenter", headingEnter);
      heading.addEventListener("mouseleave", headingLeave);

      heading._headingEnter = headingEnter;
      heading._headingLeave = headingLeave;
    });

    return () => {
      primaryBtn?.removeEventListener("mouseenter", primaryEnter);
      primaryBtn?.removeEventListener("mouseleave", primaryLeave);

      secondaryBtn?.removeEventListener(
        "mouseenter",
        secondaryEnter
      );

      secondaryBtn?.removeEventListener(
        "mouseleave",
        secondaryLeave
      );

      headings.forEach((heading) => {
        if (!heading) return;

        heading.removeEventListener(
          "mouseenter",
          heading._headingEnter
        );

        heading.removeEventListener(
          "mouseleave",
          heading._headingLeave
        );

        delete heading._headingEnter;
        delete heading._headingLeave;
      });
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-text">
        <div className="custom-text">
          <h1
            ref={(element) => {
              headingRefs.current[0] = element;
            }}
          >
            <span>Motorbike</span>
          </h1>
        </div>

        <div className="mechanics-text">
          <h1
            ref={(element) => {
              headingRefs.current[1] = element;
            }}
          >
            <span>Mechanics</span>
          </h1>
        </div>

        <div className="hero-para">
          <p>
            Bermuda’s premier hub for motorbike &amp; scooter repairs, new bike sales, rider gear, and accessories. Expert service for Vespa, Piaggio, Aprilia, Moto Guzzi, Honda &amp; Yamaha.
          </p>
        </div>

        <div className="hero-buttons">
          <div
            className="hero-btn-primary"
            ref={primaryBtnRef}
            onClick={() => navigate("/booknow")}
          >
            Book Appointment
          </div>

          <a
            className="hero-btn-secondary"
            ref={secondaryBtnRef}
            href="https://wa.me/14417035053"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#25D366",
              color: "#FFFFFF",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Direct Message
          </a>
        </div>
      </div>

      <div className="hero-image-section">
        <BookingNoHeading/>
      </div>
    </section>
  );
}