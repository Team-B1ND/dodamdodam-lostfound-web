import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { writeUploadLostFoundImageAtom } from "../../store/write/write.store";
import { LostFoundApply } from "../../types/lostfound/lostfound.type";
import { usePostLostFound as usePostLostFoundMutation } from "../../quries/lostFound/lostFound.query";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

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

  const onChangePostDataText = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitPostData = () => {
    const { content, title, place } = postData;

    if (title === "") {
      window.alert("제목을 입력해주세요");
      return;
    }

    if (content === "") {
      window.alert("내용을 입력해주세요");
      return;
    }

    if (place === "") {
      window.alert("장소를 입력해주세요");
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
          window.alert("분실물 등록 성공");
          queryClient.invalidateQueries("lostFound/getLostFoundsLostType");
          queryClient.invalidateQueries("lostFound/getLostFoundsFoundType");
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
          window.alert("분실물 등록 실패");
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
