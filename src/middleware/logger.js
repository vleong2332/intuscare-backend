/**
 * Print out the request and its response to the server console.
 */
export function logger(req, res, next) {
  const requestInfo = `${req.method} ${req.url}`;
  const startTime = Date.now();
  res.on("finish", () => {
    const elapsedTime = Date.now() - startTime;
    console.log(`${requestInfo} responded with ${res.statusCode} in ${elapsedTime}ms`)
  })
  next();
}
