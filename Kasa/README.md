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
Further, if on another path than Home on github pages, a refresh will give you a github 404, you need to copy the index.html in a 404.html file in the same folder (as a sibling) to fix this.
Here are the infos : https://blog.devgenius.io/how-to-deploy-your-vite-react-app-to-github-pages-with-and-without-react-router-b060d912b10e
