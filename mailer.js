var AWS = require('aws-sdk');

// My AWS credentials
AWS.config.update({
    'region': 'us-west-2',
    'accessKeyId': 'YOUR_ACCESS_KEY_ID',
    'secretAccessKey': 'YOUR_SECRET_ACCESS_KEY'
});

// Instance of AWS SNS service
var sns = new AWS.SNS();
// Message options
var msgOptions = {
    Message: 'Your message',
    PhoneNumber: 'Destination number',
    Subject: 'Subject'
};

// Publish SMS
sns.publish(msgOptions, function (err, data) {
    if (err) console.log(err);
    else console.log(data) + console.log();
});


