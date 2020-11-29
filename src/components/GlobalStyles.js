import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        font-family: 'Poppins', sans-serif;
        background: #dfe6e9;
    }

    .container {
        width: 1320px;
        max-width: 100%;
        margin: auto;
    }

    small, .small {
        font-size: 100%;
    }

    input[type=search]::-webkit-search-cancel-button,
    input[type=search]::-webkit-search-decoration,
    input[type=search]::-webkit-search-results-button,
    input[type=search]::-webkit-search-results-decoration {
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    input[type=search] {
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }

    input,
    button {
        background: transparent;
        outline: none;
        border: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`;

export default GlobalStyles;
