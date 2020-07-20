import React from 'react';
import ReactDOM from 'react-dom';

import {Hello} from "../../component/hello"

ReactDOM.render(
    <Hello compiler='Typescript' framework="React" />,
    document.getElementById("example")
);

