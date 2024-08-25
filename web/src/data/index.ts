import { DataAdd } from "./DataAdd";
import { DataBranch } from "./DataBranch";
import { DataCheckout } from "./DataCheckout";
import { DataClone } from "./DataClone";
import { DataCommit } from "./DataCommit";
import { DataConfig } from "./DataConfig";
import { DataDiff } from "./DataDiff";
import { DataFetch } from "./DataFetch";
import { DataLog } from "./DataLog";
import { DataMerge } from "./DataMerge";
import { DataPush } from "./DataPush";
import { DataRemote } from "./DataRemote";
import { DataStatus } from "./DataStatus";
import { DataSwitch } from "./DataSwitch";

export { DataAdd } from "./DataAdd";
export { DataBranch } from "./DataBranch";
export { DataCheckout } from "./DataCheckout";
export { DataClone } from "./DataClone";
export { DataCommit } from "./DataCommit";
export { DataConfig } from "./DataConfig";
export { DataDiff } from "./DataDiff";
export { DataFetch } from "./DataFetch";
export { DataLog } from "./DataLog";
export { DataMerge } from "./DataMerge";
export { DataPush } from "./DataPush";
export { DataRemote } from "./DataRemote";
export { DataStatus } from "./DataStatus";
export { DataSwitch } from "./DataSwitch";

export interface DataMenu {
  id: string;
  title: string;
  description: string;
  code: string;
  img: string;
  roles: string[];
  emoji: string;
}

export const CardDataArray: DataMenu[] = [
  ...DataAdd,
  ...DataBranch,
  ...DataCheckout,
  ...DataClone,
  ...DataCommit,
  ...DataConfig,
  ...DataDiff,
  ...DataFetch,
  ...DataLog,
  ...DataMerge,
  ...DataPush,
  ...DataRemote,
  ...DataStatus,
  ...DataSwitch,
];
