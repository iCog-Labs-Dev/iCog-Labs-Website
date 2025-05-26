// Path: src/middlewares/cleanup-temp-upload/index.ts

import fs from 'fs-extra';
import path from 'path';
import os from 'os';

export default (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    if (
      ctx.request.method === 'POST' &&
      ctx.request.url.startsWith('/upload') &&
      ctx.response.status < 400
    ) {
      const tempDir = os.tmpdir();

      try {
        const tempFolders = await fs.readdir(tempDir);
        const strapiTempFolders = tempFolders.filter(name =>
          name.startsWith('strapi-upload-')
        );

        for (const folder of strapiTempFolders) {
          const fullPath = path.join(tempDir, folder);
          try {
            await fs.remove(fullPath);
            strapi.log.info(`Cleaned up temp folder: ${fullPath}`);
          } catch (err) {
            strapi.log.warn(`Failed to remove temp folder ${fullPath}: ${err.message}`);
          }
        }
      } catch (err) {
        strapi.log.error(`Failed reading temp directory: ${err.message}`);
      }
    }
  };
};
