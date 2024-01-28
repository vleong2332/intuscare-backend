/**
 * Ensure that requests has at least 2 integer operands called 'a' and 'b'. Otherwise, respond with
 * a 400 status.
 */
export function hasTwoIntegerOperands(req, res, next) {
  const aAsInt = parseInt(req.params.a);
  if (Number.isNaN(aAsInt)) {
    return res.status(400).json({ error: "'a' param must be an integer." });
  }
  
  const bAsInt = parseInt(req.params.b);
  if (Number.isNaN(bAsInt)) {
    return res.status(400).json({ error: "'b' param must be an integer." });
  }

  req.intOperands = { a: aAsInt, b: bAsInt };
  next();
}
