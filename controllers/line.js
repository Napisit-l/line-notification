const Logger = require('../helpers/logger'),
  lineService = require('../service/lineService');

module.exports = (server) => {
  //Find all user data
  server.get('/notify', async (req, res, next) => {
    console.log('Line Notify');
    try {
      let notify = await lineService
        .POST()
        .then((notify) => {
          console.log('nppfity ', notify);
          return notify;
        })
        .catch((err) => {
          return err;
        });

      res.send(notify);
    } catch (err) {
      console.log('err ', err);
      res.send('ERROR ', err);
    }
  });
};
