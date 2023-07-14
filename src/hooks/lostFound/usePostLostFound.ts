import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { writeUploadLostFoundImageAtom } from "../../store/write/write.store";
import { LostFoundApply } from "../../types/lostfound/lostfound.type";
import { usePostLostFound as usePostLostFoundMutation } from "../../quries/lostFound/lostFound.query";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { usePostModuleLog } from "../../quries/log/log.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";

const usePostLostFound = () => {
  const queryClient = useQueryClient();

  const [postData, setPostData] = useState<LostFoundApply>({
    content: "",
    image: null,
    place: "",
    type: "LOST",
    title: "",
  });

  const navigate = useNavigate();

  const [image, setImage] = useRecoilState(writeUploadLostFoundImageAtom);

  const postLostFoundMutation = usePostLostFoundMutation();
  const postModuleLogMutation = usePostModuleLog();

  const onChangePostDataText = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitPostData = () => {
    const { content, title, place } = postData;

    if (title.trim() === "") {
      B1ndToast.showInfo("제목을 입력해주세요");
      return;
    }

    if (content.trim() === "") {
      B1ndToast.showInfo("내용을 입력해주세요");
      return;
    }

    if (place.trim() === "") {
      B1ndToast.showInfo("위치를 입력해주세요");
      return;
    }

    const handlePostData: LostFoundApply = {
      ...postData,
      image: image,
    };

    postLostFoundMutation.mutateAsync(
      { data: handlePostData },
      {
        onSuccess: () => {
          B1ndToast.showSuccess(
            handlePostData.type === "FOUND"
              ? "습득물 등록 성공"
              : "분실물 등록 성공"
          );

          queryClient.invalidateQueries("lostFound/getMyLostFounds");
          queryClient.invalidateQueries("lostFound/getLostFoundsLostType");
          queryClient.invalidateQueries("lostFound/getLostFoundsFoundType");

          postModuleLogMutation.mutate({
            description: "분실물/습득물 등록",
            moduleName: "분실물/습득물 등록",
          });
          navigate("/");
          setPostData({
            content: "",
            title: "",
            place: "",
            type: "LOST",
            image: null,
          });
          setImage(null);
        },
        onError: () => {
          B1ndToast.showError("분실물 등록 실패");
        },
      }
    );
  };

  return {
    postData,
    onChangePostDataText,
    setPostData,
    onSubmitPostData,
    isPosting: postLostFoundMutation.isLoading,
  };
};

export default usePostLostFound;
