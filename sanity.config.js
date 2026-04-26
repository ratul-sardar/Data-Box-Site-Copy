import { defineConfig } from 'sanity/config'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'


const config = defineConfig({
    plugins: [deskTool(), visionTool(), codeInput()],
    projectId: "chelo3w6",
    dataset: "production",
    apiVersion: "2026-04-26",
    useCdn: true,
    name: "data-box-site-copy",
    title: "Data Box Site Copy",
    basePath: "/admin",

    schema: {
        types: [
            // Define your schemas here
        ]
    }
});

export default config;
