import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import customAxios from "../../lib/axios";
import { usePostModuleLog } from "../../quries/log/log.query";
import { usePatchLostFound } from "../../quries/lostFound/lostFound.query";
import { writeUploadLostFoundImageAtom } from "../../store/write/write.store";
import { LostFoundApply } from "../../types/lostfound/lostfound.type";

interface Param {
  lostFoundId: string | undefined;
}

const useModifyLostFound = ({ lostFoundId }: Param) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const [tempLostFoundData, setLostFoundData] = useState<LostFoundApply>({
    image: null,
    content: "",
    title: "",
    type: "LOST",
    place: "",
  });

  const [modifyLostFoundData, setModifyLostFoundData] =
    useState<LostFoundApply>({
      image: null,
      content: "",
      title: "",
      type: "LOST",
      place: "",
    });
  const [image, setImage] = useRecoilState(writeUploadLostFoundImageAtom);

  const patchLostFoundMutation = usePatchLostFound();
  const postModuleLogMutation = usePostModuleLog();

  useEffect(() => {
    if (lostFoundId) {
      (async () => {
        const { data } = await customAxios.get(`/lostfound/${lostFoundId}`);
        const { image, title, content, type, place } = data.data;

        setLostFoundData({ image, title, content, type, place });
        setModifyLostFoundData({ image, title, content, type, place });
        setImage(data.data.image);
      })();
    }
  }, [lostFoundId, setImage]);

  const onChangeModifyPostData = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setModifyLostFoundData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setModifyLostFoundData((prev) => ({ ...prev, image }));
  }, [image]);

  const onSubmitModifyPostData = () => {
    if (
      Object.entries(tempLostFoundData).toString() ===
      Object.entries(modifyLostFoundData).toString()
    ) {
      B1ndToast.showInfo("글을 수정해주세요");
      return;
    }

    patchLostFoundMutation.mutateAsync(
      { data: modifyLostFoundData, lostFoundId: Number(lostFoundId) },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("분실물 수정 성공");
          queryClient.invalidateQueries("lostFound/getMyLostFounds");
          postModuleLogMutation.mutate({
            description: "분실물/습득물 수정",
            moduleName: "분실물/습득물 수정",
          });
          navigate("/my");
          setImage("");
        },
        onError: () => {
          B1ndToast.showError("분실물 수정 실패");
        },
      }
    );
  };

  return {
    modifyLostFoundData,
    setModifyLostFoundData,
    onChangeModifyPostData,
    onSubmitModifyPostData,
    isModifying: patchLostFoundMutation.isLoading,
  };
};

export default useModifyLostFound;
