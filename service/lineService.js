// // const Users = require('../models/User');
const axios = require('axios');
const qs = require('querystring');

const methods = {
  POST() {
    return new Promise(async (resolve, reject) => {
      try {
        const requestBody = {
          message: 'ลงทะเบียน',
        };

        var rs = await axios
          .post('https://notify-api.line.me/api/notify', qs.stringify(requestBody), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: 'Bearer ZLHL4rIQDhrAL5xi9Z8yV8ybnKqKutyKxTCI56BCZQs',
            },
          })
          .then((result) => {
            // Do somthing
            console.log('result ', result);
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
