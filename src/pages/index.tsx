import React, { useEffect, useRef, useState } from "react";
import AboutUs from "~/components/elements/AboutUs";
import Banner from "~/components/elements/Banner";
import Carousel from "~/components/elements/Carousel";
import EPoster from "~/components/elements/EPoster";
import Footer from "~/components/elements/Footer";
import Header from "~/components/elements/Header";
import OrganizingCommittee from "~/components/elements/OrganizingCommittee";
import ScientificProgram from "~/components/elements/ScientificProgram";
import SocialLinks from "~/components/elements/SocialLinks";
import Updates from "~/components/elements/Updates";
import MainPageTemplate from "~/components/templates/MainPageTemplate";

const index = () => {
  const [themeColor, setThemeColor] = useState<string>("");

  const handleCurrentItemChange = (color: string) => {
    setThemeColor(color);
  };
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const scientificProgramRef = useRef<HTMLDivElement | null>(null);
  const organizingCommitteeRef = useRef<HTMLDivElement | null>(null);
  const ePosterRef = useRef<HTMLDivElement | null>(null);
  const updatesRef = useRef<HTMLDivElement | null>(null);
  const contactUsRef = useRef<HTMLDivElement | null>(null);

  const handleHeaderOnClick = (
    ref: React.RefObject<HTMLDivElement>,
    offset: number,
  ) => {
    if (ref.current) {
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="flex h-full w-full flex-col overflow-x-hidden overscroll-y-auto">
        <Header
          onAboutUsClick={() => {
            handleHeaderOnClick(aboutUsRef, 90);
          }}
          onScientificProgramClick={() => {
            handleHeaderOnClick(scientificProgramRef, 0);
          }}
          onOurMembersClick={() => {
            handleHeaderOnClick(organizingCommitteeRef, 0);
          }}
          onSubmitEposterClick={() => {
            handleHeaderOnClick(ePosterRef, 0);
          }}
          onUpdatesClick={() => {
            handleHeaderOnClick(updatesRef, 0);
          }}
          onContactUsClick={() => {
            handleHeaderOnClick(contactUsRef, 0);
          }}
        />
        <div className="z-0 mt-20 flex w-full flex-col">
          <Banner
            transitionInterval={5000}
            onCurrentItemChange={handleCurrentItemChange}
          />
          <div
            className="flex flex-wrap items-center justify-center"
            ref={aboutUsRef}
          >
            <AboutUs themeColor={themeColor} />
          </div>
          <div
            className="flex flex-wrap items-center justify-center"
            ref={scientificProgramRef}
          >
            <ScientificProgram themeColor={themeColor} />
          </div>
          <div
            className="flex flex-wrap items-center justify-center"
            ref={organizingCommitteeRef}
          >
            <OrganizingCommittee />
          </div>
          <div
            className="flex flex-wrap items-center justify-center"
            ref={ePosterRef}
          >
            <EPoster />
          </div>
          <div
            className="flex flex-wrap items-center justify-center"
            ref={updatesRef}
          >
            <Updates />
          </div>
          <div
            className="flex flex-wrap items-center justify-center"
            ref={contactUsRef}
          >
            <SocialLinks />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default index;
