import * as S from "./style";
import { useQueryClient } from "react-query";
import { useState } from "react";

export default function NoData({invalidate}:{invalidate:string[] | string}){
    const queryClient = useQueryClient();
    const [fetch,SetFetch] = useState<boolean|null>(false);
    //console.log(invalidate);
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