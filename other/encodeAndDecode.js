/*

Encode and Decode TinyURL
Solution
Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

*/

const map = {};
const characters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getRandom = () => {
  let key = '';
  for (let i = 0; i < 6; i++) {
    key += characters[Math.floor(Math.random() * 62)];
  }
  return key;
}

var encode = longUrl => {
  let key = getRandom();
  while(map[key] !== undefined) {
    key = getRandom();
  }
  
  map[key] = longUrl;
  return `http://tinyurl.com/${key}`;
};

const decode = shortUrl => {
  const key = shortUrl.replace('http://tinyurl.com/', '');
  return map[key];
};