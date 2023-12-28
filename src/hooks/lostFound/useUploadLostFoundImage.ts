import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, DragEvent, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { usePostModuleLog } from "../../quries/log/log.query";
import { usePostUpload } from "../../quries/upload/upload.query";
import { writeUploadLostFoundImageAtom } from "../../stores/write/write.store";

const useUploadLostFoundImage = () => {
  const [, setImage] = useRecoilState(writeUploadLostFoundImageAtom);
  const [isDrag, setIsDrag] = useState(false);
  const postUploadMutation = usePostUpload();
  const postModuleLogMutation = usePostModuleLog();

  const onChangeImage = useCallback(
    async (e: ChangeEvent<HTMLInputElement> | any) => {
      let image: File;
      if (e.type === "drop") {
        image = e.dataTransfer.files[0];
      } else {
        image = e.target.files[0];
      }
      const formData = new FormData();
      formData.append("file", image);

      postUploadMutation.mutateAsync(
        { formData },
        {
          onSuccess: (res) => {
            B1ndToast.showSuccess("이미지 업로드 성공");
            setImage(res.data);
            postModuleLogMutation.mutate({
              description: "분실물/습득물 사진 업로드",
              moduleName: "분실물/습득물 사진 업로드",
            });
          },
          onError: () => {
            B1ndToast.showError("이미지 업로드 실패");
          },
        }
      );
    },
    [setImage]
  );

  const dropHandler = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDrag(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onChangeImage(e);
        e.dataTransfer.clearData();
      }
    },
    [onChangeImage]
  );

  const dragHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files) {
      setIsDrag(true);
    }
  }, []);

  const dragInHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const dragOutHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDrag(false);
  }, []);

  return {
    dropHandler,
    dragHandler,
    dragInHandler,
    dragOutHandler,
    isDrag,
    onChangeImage,
    isUploading: postUploadMutation.isLoading,
  };
};

export default useUploadLostFoundImage;
