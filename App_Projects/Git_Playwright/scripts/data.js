// GIT DATA IMPORTS
import { cmdInitialize } from "./sections/git/cmdInitialize.js";
import { cmdSetup } from "./sections/git/cmdSetup.js";
import { cmdGettingStarted } from "./sections/git/cmdGettingStarted.js";
import { cmdBranchAndMerge } from "./sections/git/cmdBranchAndMerge.js";
import { cmdSync } from "./sections/git/cmdSync.js";
import { cmdInspect } from "./sections/git/cmdInspect.js";

// PLAYWRIGHT DATA IMPORTS
import { cmdPlaywrightCore } from "./sections/playwright/cmdPlaywrightCore.js";
import { cmdAllureReport } from "./sections/playwright/cmdAllureReport.js";
import { cmdCucumberFramework } from "./sections/playwright/cmdCucumberFramework.js";



// SECTIONS
export const commandsData = [
    // GIT
    cmdInitialize,
    cmdSetup,
    cmdGettingStarted,
    cmdBranchAndMerge,
    cmdSync,
    cmdInspect,

    // PLAYWRIGHT
    cmdPlaywrightCore,
    cmdAllureReport,
    cmdCucumberFramework,
]