import React, { useState, useRef, useCallback, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Experiences from "../components/sections/Experiences";
import Herosection from "../components/sections/Herosection";
import Services from "../components/sections/Services";
import Works from "../components/sections/Works";

function Homepage3() {
  const heroRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [cursorState, setCursorState] = useState({
    position: { x: 0, y: 0 },
    elementDimensions: { width: 0, height: 0 },
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("scrollTo");
    if (section) {
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          smooth: true,
        });
        navigate("/", { replace: true });
      }, 500);
    }
  }, [location.search, navigate]);

  const handleMouseMove = useCallback((e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setCursorState({
        position: { x: e.clientX - rect.left, y: e.clientY - rect.top },
        elementDimensions: { width: rect.width, height: rect.height },
      });
    }
  }, []);

  return (
    <>
      <Header3 logoSource="/images/logo.svg" />
      <main className="content-3">
        <Element name="section-home">
          <div ref={heroRef} onMouseMove={handleMouseMove}>
            <Herosection
              position={cursorState.position}
              elementDimensions={cursorState.elementDimensions}
            />
          </div>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-services">
          <Services />
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
    </>
  );
}

export default Homepage3;
