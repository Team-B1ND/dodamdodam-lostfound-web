import { useMutation } from "react-query";
import { postModuleLogParam } from "../../repositories/log/log.param";
import logRepository from "../../repositories/log/log.repository";

export const usePostModuleLog = () => {
  const mutation = useMutation(
    ({ description, moduleName }: postModuleLogParam) =>
      logRepository.postModuleLog({ description, moduleName })
  );

  return mutation;
};
