import React from "react";
import AboutUs from "~/components/elements/AboutUs";
import Banner from "~/components/elements/Banner";
import Carousel from "~/components/elements/Carousel";
import EPoster from "~/components/elements/EPoster";
import OrganizingCommittee from "~/components/elements/OrganizingCommittee";
import ScientificProgram from "~/components/elements/ScientificProgram";
import SocialLinks from "~/components/elements/SocialLinks";
import MainPageTemplate from "~/components/templates/MainPageTemplate";

const index: React.FunctionComponent = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  return (
    <div>
      <MainPageTemplate>
        <Banner />
        <AboutUs />
        <ScientificProgram />
        <OrganizingCommittee />
        <EPoster />
        <SocialLinks />
      </MainPageTemplate>
    </div>
  );
};

export default index;
