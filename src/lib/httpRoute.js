/**
 * Generates a Route
 *
 * @param server
 * @param url
 * @param method
 * @param handler
 */
export function generateRoute (server, url, method, handler) {
  server.patch(url, (req, res) => {
    console.log(`API REQUEST: ${url}`);

    res.json(
      handler(req.body)
    );
  });
}
