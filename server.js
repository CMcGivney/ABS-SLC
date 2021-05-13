import sslRedirect from 'heroku-ssl-redirect';
import express from 'express';
import compression from 'compression';
import favicon from 'express-favicon';
import path from 'path';
const port = process.env.PORT || 8080;
const app = express();

app.use(sslRedirect());
app.use(compression())
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
