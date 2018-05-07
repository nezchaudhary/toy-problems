/*

Build a web server that has 2 endpoints.These endpoints will interact with other pages on the
web to get html information from them.

First Endpoint:
The first endpoint should return all tags that match the user - passed tag value on the page
passed in the endpoint value.
Request signature:
- http://your-web-address.com/parse?endpoint=www.cobalt.io&tag=h1
In the above example request your server should output a list of the h1 tags from the ‘endpoint’
url in a json format.
Example output:
{
  h1: [
    {
      innerText: ‘Pen Testing as a Service for Modern SaaS Businesses’,
    innerHtml: ‘<span class="text-nowrap">Pen Testing as a Service</span> <span
      class="text-nowrap">for Modern SaaS Businesses</span>’
},
{
  innerText: ’Crowdsourced Pen Testing for Modern SaaS Businesses ‘,
  innerHTML: ’<span class="text-nowrap">Crowdsourced Pen</span> <span
    class="text-nowrap">Testing for Modern</span> <span class="text-nowrap">SaaS
Businesses</span>’
}
...
]
}

Second Endpoint:
The second endpoint should check to see if a given page contains a certain html tag that has
certain text inside of it.
- http://your-web-address.com/contains?endpoint=www.cobalt.io&tag=h1&text=Pen%252
0Testing % 2520 as% 2520a % 2520Service
Example Output:
{
  exists: true
}
This would return true as www.cobalt.io contains an H1 tag with the text “Pen Testing as a
Service”.If this wasn’t the case it would return exists: false.

*/

const express = require('express');
const app = express();
const https = require('https');
const http = require('http');
const HtmlParser = require('htmlparser');

const handler = new HtmlParser.DefaultHandler((err, dom) => {
  if (error) {
    console.error('handler err', error);
  }
  else {
    console.log('data after parser', dom);
  }
});

const parser = new HtmlParser.Parser(handler);

const request = (endpoint) => {
  return new Promise((resolve, reject) => {
    http.get(`http://${endpoint}`, (res) => {
      let htmlData = '';
      res.on('data', (chunk) => {
        htmlData += chunk;
      });
        res.on('end', () => {
        resolve(htmlData);
      });
    });
  });
}

app.get('/parse', (req, res) => {
  console.log('req query', req.query);
  let { endpoint, tag } = req.query;
  request(endpoint)
    .then(data => {
      parser.parseComplete(data);
      sys.puts(sys.inspect(handler.dom, false, null));
    })
    .then(data => console.log('dataaaa', data))
    .catch(err => console.error('in get request', err));
  res.send('done');
  // return all tag values with properties innerText, innerHTML
});

app.get('/contains', (req, res) => {
  let { endpoint, tag, text } = req.query;
  // return boolean value;
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))


