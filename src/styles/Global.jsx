import {createGlobalStyle} from 'styled-components'
export const GlobalStyles = createGlobalStyle`

/* fonts variables */
:root {
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-secondary-text: Segoe UI, system-ui, sans-serif;
  --nav-header-height: 72px;
  --toastify-color-error: #991212;
  --toastify-text-color-light: #000;
  --color-timeline: #000;
}

/* Box sizing rules */
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-padding-top: 150px;
}

body {
  min-width: 320px;
  font-size: 1.2rem;
  color: #000000;
  background-color: rgb(243, 244, 245);
}

html,
body,
__#next {
  height: 100%;
  width: 100%;
  line-height: 1.30769231;
  vertical-align: baseline;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    text-size-adjust: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

main {
  overflow-x: hidden;
  min-width: 320px;
  min-height: 100vh;
  margin-top: var(--nav-header-height);
}

.mobile_nav_open {
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
   overflow: hidden;
  }
}

.no_select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  backface-visibility: hidden;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
li {
  list-style-type: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`
