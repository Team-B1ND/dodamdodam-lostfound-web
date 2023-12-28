import React, { ReactNode } from "react";
import DarkModeButton from "../DarkmodeButton";
import NavBar from "../Nav";

import {
  PageTemplateContainer,
  PageTemplateContentWrap,
  PageTemplateWrap,
} from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateContainer>
      <PageTemplateWrap>
        <NavBar />
        <PageTemplateContentWrap>{children}</PageTemplateContentWrap>
        <DarkModeButton />
      </PageTemplateWrap>
    </PageTemplateContainer>
  );
};

export default PageTemplate;
