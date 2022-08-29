import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from "@astrojs/react";
import node from '@astrojs/node';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), svelte()],
  adapter: node(),
  output:'server'
});