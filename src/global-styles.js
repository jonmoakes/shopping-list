import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        width:100%;
        background-color:#C497EE;
    }
    body {
        margin: 0px auto 100px auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight:bold;
        width:100%;
        text-align:center;
        text-shadow: 1px 1px 1px black;
        text-transform:capitalize;
        font-family: 'PT Serif', serif;
        position: relative;
        h2 {
            color:white;
            text-decoration:underline;
        }
        p {
            font-size:18px;
            text-shadow:none;

            @media screen and (max-width:320px) {
                font-size:16px;
            }
        }
        a {
            color:#1e9aee;
            text-decoration: none;
            text-shadow:1px 1px 1px black;
            &:hover {
                color:white;
               
            }
        }
        ul {
            padding-left: unset;
            display: table;
            margin: 0 auto;
            font-size:18px;
            @media screen and (max-width:1024px) {
                list-style-type: none;
            }
        }
          
        li {
            margin-bottom: 10px;
            text-shadow:none;
            color:#cc1616;
        }
        hr {
            border-top:6px solid black;
            border-radius: 5px;
            width:70%;
        }
    }
`;
