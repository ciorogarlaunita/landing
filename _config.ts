import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import minify_html from "lume/plugins/minify_html.ts";
import postcss from "lume/plugins/postcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

import tailwindConfig from "./tailwind.config.ts";
import { getMembers } from "./src/lib/opencollective.ts";

const site = lume({
	src: "./src",
	dest: "./build",
});

site.use(jsx_preact());
site.use(mdx());
site.use(minify_html());
site.use(sitemap());
site.use(tailwindcss({
	extensions: [".html", ".mdx", ".tsx"],
	options: tailwindConfig,
}));
site.use(postcss());
site.data("layout", "layouts/main.tsx");

site.data("members", await getMembers());

site.copy("assets", (file) => file.toLowerCase().replace("assets/", ""));

export default site;
