import { useGetMyLostFounds } from "../.././.././quries/lostFound/lostFound.query";
import {
    MyLostFoundEmptyIcon,
    MyLostFoundEmptyWrap,
} from "../style";
import { AiOutlineFolderOpen } from "@react-icons/all-files/ai/AiOutlineFolderOpen";
import MyLostFoundItem from "../MyLostFoundItem";

export default function MyLostFoundDetail(){
    
    const {
        data: serverMyLostFoundData,
    } = useGetMyLostFounds({suspense: true});

    return(
        <>
            {serverMyLostFoundData?.data.length === 0 ? (
                <MyLostFoundEmptyWrap>
                    <MyLostFoundEmptyIcon>
                        <AiOutlineFolderOpen />
                    </MyLostFoundEmptyIcon>
                    등록한 분실물이 없습니다
                </MyLostFoundEmptyWrap>
                ) : (
                <>
                    {serverMyLostFoundData?.data.map((lostFound) => (
                        <MyLostFoundItem data={lostFound} key={lostFound.id} />
                    ))}
                </>
            )}
        </>
    );
}