import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from"astro-icon";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    include: {
      mdi: ["*"] // (Default) Loads entire Material Design Icon set
    }
  })]
});