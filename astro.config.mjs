import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import { remarkReadingTime } from './remark-reading-time.mjs';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image()],
//   markdown: {
//     remarkPlugins: [remarkReadingTime]
//   },
  // output: "server"
  experimental: {
    assets: true
   },
   site: 'https://Pithiya-Nilesh.github.io',
});