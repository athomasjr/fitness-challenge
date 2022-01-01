import '@fontsource/nunito'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
${reset}

html {
	font-size: 62.5%;

}

body, html, #root {
	height: 100%;
}

body {
font-family: "Nunito";
}


p {
	margin-bottom: 1.2rem;
	font-size: 1.6rem;
}

h1,
h2,
h3,
h4,
h5 {
	margin: 3rem 0 1.38rem;
	font-weight: 600;
	line-height: 1.3;
}

h1 {
	margin-top: 0;
	font-size: 3.2rem;
}

h2 {
	font-size: 2.441rem;
}

h3 {
	font-size: 1.953rem;
}

h4 {
	font-size: 1.563rem;
}

h5 {
	font-size: 1.25rem;
}


a {
	text-decoration: none;
	color: inherit;
}

 button {
	font-size: 1.6rem !important;

}

input, input::placeholder, label {
	font-size: 1.6rem !important;
}


`

export default GlobalStyles
