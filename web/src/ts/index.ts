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
];

export interface DataMenu {
  id: string;
  title: string;
  description: string;
  code: string;
  img: string;
  roles: string[];
  emoji: string;
}
