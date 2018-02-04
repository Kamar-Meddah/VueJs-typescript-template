const shell = require("shelljs");

shell.cp("-R", "src/assets", "dist/assets/");
shell.cp("src/manifest.json", "dist/manifest.json");
shell.cp("src/favicon.ico", "dist/favicon.ico");
