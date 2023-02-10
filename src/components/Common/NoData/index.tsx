import * as S from "./style";
import { useQueryClient } from "react-query";
import { useState } from "react";

interface invalidateProps{
    invalidate:string[]|string;
}

export default function NoData({invalidate}:invalidateProps){
    const queryClient = useQueryClient();
    const [fetch,SetFetch] = useState<boolean|null>(false);

    function Retry(){
        SetFetch(true);
        if(Array.isArray(invalidate)) {
            invalidate.map((key) => queryClient.invalidateQueries(key));
        }  
        else {
            queryClient.invalidateQueries(invalidate);
        }
    }
    return(
        <div>
            <S.NoFound>{ fetch ? <>fetching...</> : <>Error :(</> }</S.NoFound>
            <S.RetryBtnContainer>
                <S.RetryBtn onClick={Retry}>다시 시도하기</S.RetryBtn>
            </S.RetryBtnContainer>
        </div>
    );
}