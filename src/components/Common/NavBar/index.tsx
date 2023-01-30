//네브바 
import { useGetMyMember } from "../../../quries/member/member.query";
import dataTransform from "../../../utils/transform/dataTransform";
import NavBarTab from "./NavBarTab";
import {
  NavBarClassroom,
  NavBarContainer,
  NavBarLogo,
  NavBarName,
  NavBarProfile,
  NavBarProfileWrap,
} from "./style";
import Logo from "../../../assets/logo/logo.svg";
import DefaultProfileImage from "../../../assets/image/common/defaultProfile.png";
import { ReactNode, Suspense } from "react";
import ErrorBoundary from "../../../ErrorBoundary/ErrorBoundary";
import Spinner from "../Spinner/Spinner";
import NoData from "../NoData";

const NavBar = () => {
  //serverMyMemberData에 data값을 들어간다.
  const { data:serverMyMemberData } = useGetMyMember();//반번호이름 불러오기
  //console.log(serverMyMemberData);
  return (
    <ErrorBoundary fallback={<NoData/>}>
      <Suspense fallback={<Spinner isLoading isAbsolute={true}/>}>
        <NavBarContainer>
          <NavBarLogo
            src={Logo}
            onClick={() => (window.location.href = "http://dodam.b1nd.com/")}
          />
            <NavBarProfileWrap>
              {serverMyMemberData && (
                <>
                  <NavBarProfile
                    src={
                      serverMyMemberData?.data?.member.profileImage! ||
                      DefaultProfileImage
                    }
                  />
                  <NavBarName>{serverMyMemberData?.data?.member.name}</NavBarName>
                  <NavBarClassroom>
                    {dataTransform.classRoomTransform(
                      serverMyMemberData?.data?.classroom!,
                      serverMyMemberData?.data?.number!
                    )}
                  </NavBarClassroom>
                </>
              )}
            </NavBarProfileWrap>
          <NavBarTab />
        </NavBarContainer>
      </Suspense>
    </ErrorBoundary>
  );
};

export default NavBar;


//============================================================================
// import { useGetMyMember } from "../../../quries/member/member.query";
// import dataTransform from "../../../utils/transform/dataTransform";
// import NavBarTab from "./NavBarTab";
// import {
//   NavBarClassroom,
//   NavBarContainer,
//   NavBarLogo,
//   NavBarName,
//   NavBarProfile,
//   NavBarProfileWrap,
// } from "./style";
// import Logo from "../../../assets/logo/logo.svg";
// import DefaultProfileImage from "../../../assets/image/common/defaultProfile.png";

// const NavBar = () => {
//   const { data: serverMyMemberData, isLoading: serverMyMemberIsLoading } =
//     useGetMyMember();

//   return (
//     <NavBarContainer>
//       <NavBarLogo
//         src={Logo}
//         onClick={() => (window.location.href = "http://dodam.b1nd.com/")}
//       />
//       <NavBarProfileWrap>
//         {!serverMyMemberIsLoading && serverMyMemberData && (
//           <>
//             <NavBarProfile
//               src={
//                 serverMyMemberData?.data?.member.profileImage! ||
//                 DefaultProfileImage
//               }
//             />
//             <NavBarName>{serverMyMemberData?.data?.member.name}</NavBarName>
//             <NavBarClassroom>
//               {dataTransform.classRoomTransform(
//                 serverMyMemberData?.data?.classroom!,
//                 serverMyMemberData?.data?.number!
//               )}
              
//             </NavBarClassroom>
//           </>
//         )}
//       </NavBarProfileWrap>
//       <NavBarTab />
//     </NavBarContainer>
//   );
// };

// export default NavBar;

