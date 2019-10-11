import express from 'express';
import ReactDomServer from 'react-dom/server';
import React from 'react';

import App from '../src/app';

const app = express();

app.use(express.static('./public'));

app.use('/', (_, res) => {
    res.send(
        `
            <html>
                <head>
                    <title>FYZ Chat</title>
                    <link rel="stylesheet" href="/styles.css" />
                </head>
                <body>
                    <div id="react-root">${ReactDomServer.renderToString(React.createElement(App))}</div>
                    <script src="/bundle.js"></script>
                </body>
            </html>
        `
    );
});

app.listen(3000);
