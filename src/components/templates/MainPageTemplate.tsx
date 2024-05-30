import React from "react";
import Header from "../elements/Header";

interface MainPageTemplateProps {
  children?: JSX.Element | JSX.Element[];
}
const MainPageTemplate: React.FC<MainPageTemplateProps> = (props) => {
  return (
    <div className="flex h-screen w-full flex-col overflow-y-scroll">
      <Header />
      <div className="z-0 flex w-full flex-col">{props.children}</div>
    </div>
  );
};

export default MainPageTemplate;
