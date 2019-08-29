import rateLimit from "express-rate-limit";

export default new rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
