import React from "react";
import { createRoot } from 'react-dom/client';

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [

        React.createElement("h1", { }, "This is H1")
    ]),
]);

const root = createRoot(document.getElementById("root"));

root.render(parent);