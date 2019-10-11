import express from 'express';
import ReactDomServer from 'react-dom/server';
import React from 'react';

import App from '../src/app';

const app = express();

app.use((_, res) => {
    res.send(ReactDomServer.renderToString(React.createElement(App)));
});

app.listen(3000);
