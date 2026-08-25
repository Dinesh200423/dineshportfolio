import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutStory } from "../data/content";
import "./AboutHero.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const descRef = useRef(null);
  const subRef = useRef(null);
  const ruleRef = useRef(null);
  const visualRef = useRef(null);
  const qualitiesRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const qualityItems = qualitiesRef.current.querySelectorAll(".ah-quality");
      const qualityNums = qualitiesRef.current.querySelectorAll(".ah-quality-num");

      ScrollTrigger.matchMedia({
        // ---- Desktop: full pinned, scrubbed choreography ----
        "(min-width: 900px)": () => {
          gsap.set(labelRef.current, { opacity: 0.3, x: -16 });
          gsap.set(line1Ref.current, { x: -48, opacity: 0.3 });
          gsap.set(line2Ref.current, { x: 64, opacity: 0.3 });
          gsap.set(line3Ref.current, { x: 150, opacity: 0.2, scale: 1.06 });
          gsap.set([descRef.current, subRef.current], { y: 24, opacity: 0.25 });
          gsap.set(visualRef.current, { x: 130, y: -70, scale: 1.2, opacity: 0.4 });
          gsap.set(ruleRef.current, { scaleY: 0 });
          gsap.set(qualityItems, { y: 46, opacity: 0.2 });
          gsap.set(qualityNums, { x: -10, opacity: 0.2 });

          // Timeline is authored on a 0–1 scale so its position offsets map
          // predictably across the whole scrubbed scroll range.
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.35,
              pin: pinRef.current,
              anticipatePin: 1,
            },
          });

          tl.to(labelRef.current, { opacity: 1, x: 0, duration: 0.15, ease: "power2.out" }, 0)
            .to(
              line1Ref.current,
              { x: 0, y: 0, opacity: 1, duration: 0.28, ease: "power2.out" },
              0.03
            )
            .to(
              line2Ref.current,
              { x: 0, y: 0, opacity: 1, duration: 0.28, ease: "power2.out" },
              0.1
            )
            .to(
              line3Ref.current,
              { x: 0, y: 0, opacity: 1, scale: 1, duration: 0.32, ease: "power3.out" },
              0.22
            )
            .to(
              visualRef.current,
              { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.85, ease: "power2.inOut" },
              0.08
            )
            .to(ruleRef.current, { scaleY: 1, duration: 0.45, ease: "none" }, 0.28)
            .to(
              [descRef.current, subRef.current],
              { y: 0, opacity: 1, duration: 0.3, stagger: 0.07, ease: "power2.out" },
              0.34
            )
            .to(
              qualityItems,
              { y: 0, opacity: 1, duration: 0.28, stagger: 0.08, ease: "power2.out" },
              0.55
            )
            .to(qualityNums, { x: 0, opacity: 1, duration: 0.22, stagger: 0.08 }, 0.6);

          return () => tl.scrollTrigger?.kill();
        },

        // ---- Mobile / tablet: simplified, no pin ----
        "(max-width: 899px)": () => {
          const items = [
            labelRef.current,
            line1Ref.current,
            line2Ref.current,
            line3Ref.current,
            descRef.current,
            subRef.current,
            visualRef.current,
            ...qualityItems,
          ];
          gsap.set(items, { y: 22, opacity: 0 });
          gsap.set(ruleRef.current, { scaleY: 0 });

          const st = ScrollTrigger.batch(items, {
            start: "top 88%",
            onEnter: (batch) =>
              gsap.to(batch, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power2.out" }),
            once: true,
          });
          gsap.to(ruleRef.current, {
            scaleY: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: ruleRef.current, start: "top 85%", once: true },
          });

          return () => st.forEach((b) => b.kill());
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-hero" ref={sectionRef}>
      <div className="about-hero-pin" ref={pinRef}>
        <div className="ah-noise" />

        <div className="ah-grid">
          <span className="ah-label" ref={labelRef}>
            About Me
          </span>

          <h2 className="ah-heading">
            <span className="ah-line" ref={line1Ref}>
              Passionate about
            </span>
            <span className="ah-line" ref={line2Ref}>
              building things for
            </span>
            <span className="ah-line ah-highlight" ref={line3Ref}>
              the web.
            </span>
          </h2>

          <div className="ah-copy">
            <p ref={descRef}>{aboutStory.paragraphs[0]}</p>
            <p ref={subRef}>{aboutStory.paragraphs[1]}</p>
          </div>

          <div className="ah-rule" ref={ruleRef} />

          <div className="ah-qualities" ref={qualitiesRef}>
            {aboutStory.features.map((f, i) => (
              <div className="ah-quality" key={f.title}>
                <span className="ah-quality-num">0{i + 1}</span>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="ah-visual" ref={visualRef}>
            <div className="ah-visual-glow" />
            <img
              src="/images/3d-workspace.png"
              alt="Developer workspace illustration"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
