import jwt from "jsonwebtoken";
const userAuth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(500).json({ success: false, message: "not Authorized" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.body = tokenDecode.id;
    } else {
      return res
        .status(500)
        .json({ success: false, message: "not Authorized login again" });
    }
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "ERROR" });
  }
};
export default userAuth;
