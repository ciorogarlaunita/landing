// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/app/assistant.tsx";
import * as $2 from "./routes/app/business/[slug].tsx";
import * as $3 from "./routes/app/business/index.tsx";
import * as $4 from "./routes/app/index.tsx";
import * as $5 from "./routes/app/offline.tsx";
import * as $6 from "./routes/index.tsx";
import * as $$0 from "./islands/Chat.tsx";
import * as $$1 from "./islands/Navbar.tsx";

const manifest = {
	routes: {
		"./routes/_app.tsx": $0,
		"./routes/app/assistant.tsx": $1,
		"./routes/app/business/[slug].tsx": $2,
		"./routes/app/business/index.tsx": $3,
		"./routes/app/index.tsx": $4,
		"./routes/app/offline.tsx": $5,
		"./routes/index.tsx": $6,
	},
	islands: {
		"./islands/Chat.tsx": $$0,
		"./islands/Navbar.tsx": $$1,
	},
	baseUrl: import.meta.url,
	config,
};

export default manifest;
