import { KEY_CONFIGS as configs } from "https://taisukef.github.io/HiraganaParser/lib/esm/index.js";
import { remapConfigs } from "./remapConfigs.js";

remapConfigs(configs, "き", "ci");
remapConfigs(configs, "け", "ce");
remapConfigs(configs, "きゃ", "cya");
remapConfigs(configs, "きゅ", "cyu");
remapConfigs(configs, "きょ", "cyo");
remapConfigs(configs, "きぃ", "cyi");
remapConfigs(configs, "きぇ", "cye");

export const KEY_CONFIGS = configs;
