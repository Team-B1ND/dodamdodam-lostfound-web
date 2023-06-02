import { postModuleLogParam } from "./log.param";

export interface LogRepository {
  postModuleLog({ description, moduleName }: postModuleLogParam): Promise<void>;
}
