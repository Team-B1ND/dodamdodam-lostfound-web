import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
import { usePostModuleLog } from "../../quries/log/log.query";
import { useDeleteLostFound as useDeleteLostFoundQuery } from "../../quries/lostFound/lostFound.query";

const useDeleteLostFound = () => {
  const queryClient = useQueryClient();

  const deleteLostFoundMutation = useDeleteLostFoundQuery();
  const postModuleLogMutation = usePostModuleLog();

  const onDeleteLostFound = (lostFoundId: number, lostFoundType: string) => {
    deleteLostFoundMutation.mutateAsync(
      { id: lostFoundId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("lostFound/getMyLostFounds");
          if (lostFoundType === "FOUND") {
            queryClient.invalidateQueries("lostFound/getLostFoundsFoundType");
            B1ndToast.showSuccess("습득물 삭제 성공");
          } else {
            queryClient.invalidateQueries("lostFound/getLostFoundsLostType");
            B1ndToast.showSuccess("분실물 삭제 성공");
          }

          postModuleLogMutation.mutate({
            description: "분실물/습득물 삭제",
            moduleName: "분실물/습득물 삭제",
          });
        },
        onError: () => {
          B1ndToast.showError("분실물 삭제 실패");
        },
      }
    );
  };

  return { onDeleteLostFound, isDeleting: deleteLostFoundMutation.isLoading };
};

export default useDeleteLostFound;
