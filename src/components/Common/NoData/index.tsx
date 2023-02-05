import * as S from "./style";
export default function NoData(){

    const Retry = () => {
        window.location.reload();
    }
    return(
        <>
            <S.NoFound>데이터를 불러오지 못했습니다!</S.NoFound>
            <S.RetryBtnContainer>
                <S.RetryBtn onClick={Retry}>다시 시도하기</S.RetryBtn>
            </S.RetryBtnContainer>
        </>
    );
}