import { getConnection, queries, sql } from "../database";

export const getUserLogin = async (req, res) => {
    const { email, pass } = req.params;
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("email", sql.NVarChar, email)
        .input("pass", sql.NVarChar, pass)
        .query(queries.getAuthUser);
      if (result.recordset[0] === undefined) {
        res.json({ msg: "Unauthorized user.", status: 401 });
      } else {
        res.json({ msg: result.recordset[0], status: 200 })
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
 }