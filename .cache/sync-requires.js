const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/cavarrio/development_main/cavarriocarter-technical/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/cavarrio/development_main/cavarriocarter-technical/src/pages/404.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/home/cavarrio/development_main/cavarriocarter-technical/src/pages/elements.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/home/cavarrio/development_main/cavarriocarter-technical/src/pages/generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/cavarrio/development_main/cavarriocarter-technical/src/pages/index.js"))),
  "component---src-pages-landing-2-js": hot(preferDefault(require("/home/cavarrio/development_main/cavarriocarter-technical/src/pages/landing2.js"))),
  "component---src-pages-landing-3-js": hot(preferDefault(require("/home/cavarrio/development_main/cavarriocarter-technical/src/pages/landing3.js"))),
  "component---src-pages-landing-js": hot(preferDefault(require("/home/cavarrio/development_main/cavarriocarter-technical/src/pages/landing.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/cavarrio/development_main/cavarriocarter-technical/src/pages/projects.js")))
}

