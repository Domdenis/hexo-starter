import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "hexo",
    "contentSources": [],
    "postInstallCommand": "npm i --no-save @stackbit/types"
})