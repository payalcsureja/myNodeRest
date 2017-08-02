
// 200- OK; Standard response for successful HTTP requests
// 201- Created; Request has been fulfilled. New resource created
// 204- No Content; Request processed. No content returned
// 301- Moved Permanently; This and all future requests directed to the given URI
// 304- Not Modified; Resource has not been modified since last requested
// 400- Bad Request; Request cannot be fulfilled due to bad syntax
// 401- Unauthorized; Authentication is possible, but has failed
// 403- Forbidden; Server refuses to respond to request
// 404- Not Found; Requested resource could not be found
// 500- Internal Server Error; Generic error message when server fails
// 501- Not Implemented; Server does not recognize method or lacks ability to fulfill
// 503- Service Unavailable; Server is currently unavailable


module.exports = function() {
  return function(req, res, next) {

    res.returnFail = function(data) {
      return res.status(500).send({
        success: false,
        errorData: data
      });

      // var err = new Error();
      // err.status = 404;
      // err.message = {
      //   success: false,
      //   errorData: data
      // };
      // return next(err);
    };

    res.returnSuccess = function(data) {
      return res.json({
        success: true,
        data: data
      });
    };

    // ((proxied) => {
    //   res.json = function (data) {
    //     // if (req && req.token) {
    //     //   data.token = req.token;
    //     // }

    //     return proxied.call(this, { data: data });
    //   };
    // })(res.json);

    // res.customWrapper = function(data) {
    //   // implement your custom renderer
    //   console.log(data);
    // }

    next();
  };
}