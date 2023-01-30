import React,{ ReactNode, Suspense } from "react";
import ErrorBoundary from "../../../ErrorBoundary/ErrorBoundary";
import { useGetMyMember } from "../../../quries/member/member.query";
import DarkModeButton from "../DarkmodeButton";
import NavBar from "../NavBar";
import NoData from "../NoData";
import Spinner from "../Spinner/Spinner";
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
    <ErrorBoundary fallback={<NoData/>}>
      <Suspense fallback={<Spinner isLoading={true} isAbsolute={true}/>}>
        <PageTemplateContainer>
          <PageTemplateWrap>
            <NavBar/>
            <PageTemplateContentWrap>{children}</PageTemplateContentWrap>
            <DarkModeButton />
          </PageTemplateWrap>
        </PageTemplateContainer>
      </Suspense>
    </ErrorBoundary>
  );
};

export default PageTemplate;
