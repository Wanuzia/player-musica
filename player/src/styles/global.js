import { createGlobalStyle, css } from 'styled-components'
import { colors } from './theme'

const GlobalStyle = createGlobalStyle`
// Box-sizing
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  &,
  &:before,
  &:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
}
// Reset
a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}
html {
  line-height: 1;
}
ol,ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption,td,th {
  text-align: left;
  font-weight: 400;
  vertical-align: middle;
}
blockquote,q {
  quotes: none;
}
blockquote:after,blockquote:before,q:after,q:before {
  content: "";
  content: none;
}
a img {
  border: none;
}
article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {
  display: block;
}
button {
  background: none;
  border: none;
  padding: 0;
}
// Page
html {
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 62.5%;
}
body {
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
    background-color: ${colors.primary};

}
.wrapper {
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
}
a {
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
p {
  font-size: 1.4rem;
  line-height: 1.2;
}
.box {
  margin-top: 5rem;
  .subtitle {
    text-align: center;
  }
}
img {
  max-width: 100%;
  vertical-align: middle;
  object-fit: cover;
  object-position: top;
}
::-webkit-scrollbar {
  border-radius: 8px;
  width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: ${colors.secondary};
  border-radius: 8px;
  width: 8px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  width: 8px;
  background: ${colors.secondary};
 
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {

    background: ${colors.secondary};

}
.hide { display: none; }
.desaturated {
  filter: grayscale(1);
}
.inverted {
  filter: invert(100%);
}
// Link
a {

    color: ${colors.secondary};

}
.react-tooltip-lite {
  background: #333;
  color: white;
  font-size: 1.4rem;
}
.react-tooltip-lite-arrow {
  border-color: #333;
}
// footer animation
.drop {
  fill: transparent;
  animation: drop 5s ease infinite normal;

    stroke: ${colors.secondary};

  stroke-width: 0.5;
  opacity: 0.6; 
  transform: translateY(80%);
}
.drop1 { transform-origin: 20px 3px; }
.drop2 {
  animation-delay: 3s;
  animation-duration: 3s;
  transform-origin: 25px 3px;
}
.drop3 {
  animation-delay: -2s;
  animation-duration:3.4s;
  transform-origin: 16px 3px;
}
.wave {
  animation: wave 8s linear;
  animation-iteration-count:infinite;
    fill: ${colors.primaryDark};
}
#wave2 {
  animation-duration: 10s;
  animation-direction: reverse;
  opacity: .6
}
#wave3 {
  animation-duration: 13s;
  opacity:.3;
}
@keyframes drop {
  0% {
    transform: translateY(80%); 
    opacity:.6; 
  }
  80% {
    transform: translateY(80%); 
    opacity:.6; 
  }
  90% { 
    transform: translateY(10%) ; 
    opacity:.6; 
  }
  100% { 
    transform: translateY(0%) scale(1.5);  
    stroke-width:0.2;
    opacity:0; 
  }
}
@keyframes wave {
  to {transform: translateX(-100%);}
}
`

export default GlobalStyle