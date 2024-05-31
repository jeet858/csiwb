import React from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";

interface MainPageTemplateProps {
  children?: JSX.Element | JSX.Element[];
}
const MainPageTemplate: React.FC<MainPageTemplateProps> = (props) => {
  return (
    <div className="flex h-full w-full flex-col overflow-x-hidden overscroll-y-auto">
      <Header />
      <div className="z-0 mt-20 flex w-full flex-col">
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default MainPageTemplate;
