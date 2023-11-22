# React + Vite


## GitHub Pages

To deploy on github pages, used https://www.npmjs.com/package/gh-pages
Comments in vite.config.js and main.jsx to indicate changes. For other deployment you might need to change it.
Further this are the added lines in package.json:
{
    "homepage": "https://EvivNotrub.github.io/OC_p8_app_web_with_react/",
    scripts: {
        "predeploy" : "npm run build",
        "deploy" : "gh-pages -d dist",
    }
    "devDependencies": {
        "gh-pages": "^6.1.0",
  }
}
