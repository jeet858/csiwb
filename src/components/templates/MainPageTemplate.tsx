import React from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";

interface MainPageTemplateProps {
  children?: JSX.Element | JSX.Element[];
}
const MainPageTemplate: React.FC<MainPageTemplateProps> = (props) => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-x-hidden overflow-y-scroll">
      <Header />
      <div className="z-0 flex w-full flex-col">{props.children}<Footer/></div>
    </div>
  );
};

export default MainPageTemplate;
