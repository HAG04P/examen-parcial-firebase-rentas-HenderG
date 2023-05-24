import { defineConfig } from "vite";
const { resolve } = require('path')
//Add env variable to check if is production or development

const env = process.env;
//Set a base route if deploying on github pages
env.mode = env.mode || "production";

console.log('Environment: ', env.mode);

export default defineConfig({
  root: "./",
  //Add base route if deployiing on production
  base: env.mode === "production" ? "/examen-parcial-firebase-rentas-HenderG/" : "/",

  build: {

    target: "esnext",
    outDir: "docs",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },
  plugins: []
});