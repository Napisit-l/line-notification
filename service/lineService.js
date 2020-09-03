// // const Users = require('../models/User');
const axios = require('axios');
const qs = require('querystring');

const methods = {
  POST(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const requestBody = {
          message: 'ลงทะเบียนเว็บไซต์ \nคุณ '+ body.your_name + ' \nเบอร์โทร : '+body.your_phone +" \nข้อความ : "+body.your_message
        };
        var rs = await axios
          .post('https://notify-api.line.me/api/notify', qs.stringify(requestBody), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: 'Bearer ZLHL4rIQDhrAL5xi9Z8yV8ybnKqKutyKxTCI56BCZQs',
            },
          })
          .then((result) => {
            return result['data']
          })
          .catch((err) => {
            // Do somthing
            console.log('err ', err);
          });

        resolve(rs);
      } catch (err) {
        reject(err);
      }
    });
  },
};

module.exports = { ...methods };
