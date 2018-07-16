const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const pathname = url.pathname;
      
    if(pathname === '/api/penguins') {
        const penguins = ['bernice', 'bernard'];
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(penguins));
    }
    
    else if(pathname === '/api/penguins/king') {
        if(url.query.format === 'full') {
            const penguin = { 
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            };

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(penguin));
        }

        else {
            const penguin = { name: 'bernice' };
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(penguin));
        }
    }

    else if(pathname === '/mistake') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<p>All tracks recovered</p>');
    }

    else {
        res.statusCode = 404;
        res.end(res.statusCode + ' CANNOT ' + req.method + ' ' + req.url); 
    }

};