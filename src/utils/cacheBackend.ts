import * as actionsCache from "@actions/cache";
import * as actionsCacheUtils from "@actions/cache/cacheUtils";
import * as buildjetCache from "@buildjet/cache";
import * as buildjetCacheUtils from "@buildjet/cache/cacheUtils";
import * as runsOnCache from "@runs-on/cache";

import { Backend, backend } from "../inputs";

export const cache: typeof actionsCache | typeof buildjetCache | typeof runsOnCache =
    backend == Backend.Actions ? actionsCache : backend == Backend.BuildJet ? buildjetCache : runsOnCache;
export const cacheUtils: typeof actionsCacheUtils | typeof buildjetCacheUtils =
    backend == Backend.Actions ? actionsCacheUtils : buildjetCacheUtils;
