/*
USAGES OF PARCEL(IT IS A BUNDLER)-->

*HMR --> HOT MODULE REPLACEMENT 

*FILE WATCHER ALGORITHMS - WRITTEN IN C++

*BUNDLING

*MINIFY

*CLEANING OUR CODE

*DEV AND PRODUCTION BUILD

*SUPER FAST BUILD ALGORITHM

*IMAGE OPTIMISATION

*CACHING WHILE DEVELOPMENT

*COMPRESSION

*COMPATIBLE WITH OLDER VERSION OF THE BROWSER 

*HTTPS ON DEV MACHINE

*PORT NUMBER 

*CONSISTENT HASHING ALGORITHM THAT PARCEL USES FOR DOING BUNDLING

*ZERO CONFIG


*/


import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement(
    "h1",
    {
        id:"title",
    },

    "Heading 1 for parcel"
);

const heading2=React.createElement(
    "h2",
    {
        id:"title",
    },

    "Heading 2"
);

const container=React.createElement(
    "div",
    {
        id:"container",
        hello:"world",
    },

    [heading,heading2]

);



console.log(heading);

const root=ReactDOM.createRoot(document.getElementById("root"));
// passing a react element 

//async defer
root.render(container);
