import express from 'express';
import ReactDomServer from 'react-dom/server';
import React from 'react';

import App from '../src/app';

const app = express();

app.use((_, res) => {
    res.send(
        `
            <html>
                <head>
                    <title>FYZ Chat</title>
                </head>
                <body>
                    ${ReactDomServer.renderToString(React.createElement(App))}
                </body>
            </html>
        `
    );
});

app.listen(3000);
