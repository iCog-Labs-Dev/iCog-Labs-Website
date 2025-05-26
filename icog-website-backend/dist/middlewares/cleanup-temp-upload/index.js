"use strict";
// Path: src/middlewares/cleanup-temp-upload/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
exports.default = (config, { strapi }) => {
    return async (ctx, next) => {
        await next();
        if (ctx.request.method === 'POST' &&
            ctx.request.url.startsWith('/upload') &&
            ctx.response.status < 400) {
            const tempDir = os_1.default.tmpdir();
            try {
                const tempFolders = await fs_extra_1.default.readdir(tempDir);
                const strapiTempFolders = tempFolders.filter(name => name.startsWith('strapi-upload-'));
                for (const folder of strapiTempFolders) {
                    const fullPath = path_1.default.join(tempDir, folder);
                    try {
                        await fs_extra_1.default.remove(fullPath);
                        strapi.log.info(`Cleaned up temp folder: ${fullPath}`);
                    }
                    catch (err) {
                        strapi.log.warn(`Failed to remove temp folder ${fullPath}: ${err.message}`);
                    }
                }
            }
            catch (err) {
                strapi.log.error(`Failed reading temp directory: ${err.message}`);
            }
        }
    };
};
