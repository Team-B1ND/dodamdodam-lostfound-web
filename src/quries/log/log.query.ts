import { useMutation } from "react-query";
import { postModuleLogParam } from "../../repositories/log/log.param";
import logRepositoryImpl from "../../repositories/log/log.repositoryImpl";

export const usePostModuleLog = () => {
  const mutation = useMutation(
    ({ description, moduleName }: postModuleLogParam) =>
      logRepositoryImpl.postModuleLog({ description, moduleName })
  );

  return mutation;
};
