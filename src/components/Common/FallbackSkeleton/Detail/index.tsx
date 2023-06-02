import { DetailWrap } from "../../../Detail/style";
import * as S from "./style";

export default function DetailFallback() {
  return (
    <DetailWrap isLoading={true}>
      <S.DetailLoadingImg />
      <S.DetailLoadingAbleWrap height={"89px"} />
      <S.DetailLoadingAbleWrap />
      <S.DetailLoadingAbleWrap />
    </DetailWrap>
  );
}
