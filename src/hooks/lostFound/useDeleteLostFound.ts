import { useQueryClient } from "react-query";
import { useDeleteLostFound as useDeleteLostFoundQuery } from "../../quries/lostFound/lostFound.query";

const useDeleteLostFound = () => {
  const queryClient = useQueryClient();

  const deleteLostFoundMutation = useDeleteLostFoundQuery();

  const onDeleteLostFound = (lostFoundId: number) => {
    deleteLostFoundMutation.mutateAsync(
      { id: lostFoundId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("lostFound/getMyLostFounds");
          window.alert("분실물 삭제 성공");
        },
        onError: () => {
          window.alert("분실물 삭제 실패");
        },
      }
    );
  };

  return { onDeleteLostFound, isDeleting: deleteLostFoundMutation.isLoading };
};

export default useDeleteLostFound;
