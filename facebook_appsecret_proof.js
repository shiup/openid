var crypto = require('crypto');

console.error('How to calculate appsecret_proof in js');

let accessToken='EAAGO4DWbETwBALa5iaLORFOwgQnYc41pYYIu0Srpt25IHz0VkJYnuT2VQ3KxgsmugdYqxzP6hOKWsZCQlYB7kvrKF4BURGxyA8ReJD2ECfLBZB4tMp6jQJHuIIBJfuUGvh7PeNHs4YHAKUaTTJNUntyLGKy0lDMlXLBzpGLgZDZD';
let clientSecret='xxxx';
let hash = crypto.createHmac('sha256', clientSecret);
hash.update(accessToken);
console.error(hash.digest('hex'));
