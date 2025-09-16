import { createServer } from 'http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const now = new Date().toLocaleString('en-US', { hour12: true });
  const dynamicContent = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>My Simple HTTP Server</title>
      </head>
      <body>
        <h1>Welcome to my simple HTTP server!</h1>
        <p>The current date and time is: ${now}</p>
      </body>
    </html>
  `;

  // Send the response body
  res.end(dynamicContent);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});