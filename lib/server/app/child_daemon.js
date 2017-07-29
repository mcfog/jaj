const instance = require('./instance');

instance.daemon().then(function onResolve(r) {
  if (process.send) {
    process.send({
      state: 'resolved',
      result: r,
    });
  } else {
    console.log(r);
  }
}, function onReject(e) {
  if (process.send) {
    process.send({
      state: 'rejected',
      result: e,
    });
  } else {
    throw e;
  }
});
