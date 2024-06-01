import React, { useEffect, useState } from "react";
import AboutUs from "~/components/elements/AboutUs";
import Banner from "~/components/elements/Banner";
import Carousel from "~/components/elements/Carousel";
import EPoster from "~/components/elements/EPoster";
import OrganizingCommittee from "~/components/elements/OrganizingCommittee";
import ScientificProgram from "~/components/elements/ScientificProgram";
import SocialLinks from "~/components/elements/SocialLinks";
import MainPageTemplate from "~/components/templates/MainPageTemplate";

const index: React.FunctionComponent = () => {
  const transitionInterval = 5000;
  const themeColors = ["#1849C6", "#DA0D6A"];
  const [themeColor, setThemeColor] = useState(themeColors[0]);
  useEffect(() => {
    setTimeout(() => {
      const index = themeColors.indexOf(themeColor as string);
      setThemeColor(themeColors[(index + 1) % themeColors.length]);
    }, transitionInterval);
  }, [transitionInterval, themeColors]);
  return (
    <div>
      <MainPageTemplate>
        <Banner transitionInterval={5000} />
        <AboutUs themeColor={themeColor as string} />
        <ScientificProgram themeColor={themeColor as string} />
        <OrganizingCommittee />
        <EPoster />
        <SocialLinks />
      </MainPageTemplate>
    </div>
  );
};

export default index;
