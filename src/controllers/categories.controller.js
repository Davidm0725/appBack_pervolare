import { getConnection, queries, sql } from "../database";

export const getCategories = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(queries.getCategories);
    res.json({ data: result.recordset });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const createCategory = async (req, res) => {
  const { code, title, description } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("code", sql.NChar, code)
      .input("title", sql.NChar, title)
      .input("description", sql.Text, description)
      .input("createDate", sql.Date, new Date())
      .query(queries.createCategory);
    if (result.rowsAffected[0] === 1) {
      res.json({ mgs: "Category created successfully.", status: 200 });
    } else {
      res.json({ mgs: "Internal server error!.", status: 500 });
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}


export const updateCategory = async (req, res) => {
  const { id ,code, title, description } = req.body;
  if ((code === null || code === "") || title === "" || description === "") {
    return res.status(400).json({ msg: "Bad request. Please fill all fields." })
  }
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .input("code", sql.NChar, code)
      .input("title", sql.NChar, title)
      .input("description", sql.Text, description)
      .input("updateDate", sql.Date, new Date())
      .query(queries.updateCategoryById);
    if (result.rowsAffected[0] === 1) {
      res.json({ msg: "Category successfully updated", status: 200 });
    } else {
      res.json({ msg: "Category not found or could not be updated", status: 400 });
    }
  } catch (error) {
    throw error
  }
}

export const deleteCategory = async (req, res) => {
  const { id } = req.query;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(queries.deleteCategory);
    if (result.rowsAffected[0] === 1) {
      res.json({ msg: "Category successfully deleted", status: 200 });
    } else {
      res.json({ msg: "Category not found or could not be deleted", status: 400 });
    }

  } catch (error) {
    throw error
  }
};