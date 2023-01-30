import { NoFound,
RetryBtn,
NoDataContainer,
RetryBtnContainer 
} from "./style";

export default function NoData(){
    const Retry = () => {
        window.location.reload();
    }
    return(
        <NoDataContainer>
            <NoFound>데이터를 불러오지 못했습니다!</NoFound>
            <RetryBtnContainer>
                <RetryBtn onClick={Retry}>다시 시도하기</RetryBtn>
            </RetryBtnContainer>
        </NoDataContainer>
    );
}