import express from "express";
import { mean, divide, multiply, subtract, sum } from "../lib/math";
import { hasTwoIntegerOperands } from "../middleware/validation"

const router = express.Router();

router.get("/sum/:a/:b", hasTwoIntegerOperands, (req, res) => {
  const result = sum(req.intOperands.a, req.intOperands.b);
  return res.json({ result });
});

router.get("/subtract/:a/:b", hasTwoIntegerOperands, (req, res) => {
  const result = subtract(req.intOperands.a, req.intOperands.b);
  return res.json({ result });
});

router.get("/multiply/:a/:b", hasTwoIntegerOperands, (req, res) => {
  const result = multiply(req.intOperands.a, req.intOperands.b);
  return res.json({ result });
});

router.get("/divide/:a/:b", hasTwoIntegerOperands, (req, res) => {
  const result = divide(req.intOperands.a, req.intOperands.b);
  return res.json({ result });
});

router.get("/mean/:a", (req, res) => {
  const commaSeparatedIntegers = /^\d+(,\d+)*$/;
  if (!commaSeparatedIntegers.test(req.params.a)) {
    return res.status(400).json({ error: "param 'a' must be a comma-separated integers." })
  };
  
  const aAsArray = req.params.a.split(",");
  let aAsIntArray = [];
  for (let i = 0; i < aAsArray.length; i++) {
    const valueAsInt = parseInt(aAsArray[i]);
    if (Number.isNaN(valueAsInt)) return res.status(400).json({ error: "param 'a' must be a comma-separated integers." })
    aAsIntArray.push(valueAsInt)
  }

  const result = mean(aAsIntArray);

  return res.json({ result });
})

export default router;
