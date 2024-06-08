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
  // const transitionInterval = 5000;
  // const themeColors = ["#1849C6", "#DA0D6A"];
  // const [themeColor, setThemeColor] = useState(themeColors[0]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     const index = themeColors.indexOf(themeColor as string);
  //     setThemeColor(themeColors[(index + 1) % themeColors.length]);
  //   }, transitionInterval);
  // }, [transitionInterval, themeColors]);
  const [themeColor, setThemeColor] = useState<string>("");

  const handleCurrentItemChange = (color: string) => {
    setThemeColor(color);
  };
  const ref = useRef<HTMLDivElement | null>(null);
  const handleScrollToAboutUs = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      return;
    }
  };
  return (
    // <div>
    //   <MainPageTemplate>
    // <Banner
    //   transitionInterval={5000}
    //   onCurrentItemChange={handleCurrentItemChange}
    // />
    // <AboutUs themeColor={themeColor} ref={ref}/>
    // <ScientificProgram themeColor={themeColor} />
    // <OrganizingCommittee />
    // <EPoster />
    // <Updates />
    // <SocialLinks />
    //   </MainPageTemplate>
    // </div>

    <div>
      <div className="flex h-full w-full flex-col overflow-x-hidden overscroll-y-auto">
        <Header onAboutUsClick={handleScrollToAboutUs} />
        <div className="z-0 mt-20 flex w-full flex-col">
          <Banner
            transitionInterval={5000}
            onCurrentItemChange={handleCurrentItemChange}
          />
          <AboutUs themeColor={themeColor} ref={ref} />
          <ScientificProgram themeColor={themeColor} />
          <OrganizingCommittee />
          <EPoster />
          <Updates />
          <SocialLinks />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default index;
