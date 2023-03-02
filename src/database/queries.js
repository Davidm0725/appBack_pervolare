export const queries = {
  getAuthUser: "SELECT *  FROM [dbpervolare].[dbo].[UserLogin]  WHERE [email] = @email and [password] = @pass",

  getCategories:
    "SELECT * FROM [dbpervolare].[dbo].[Categories]",

  createCategory:
    "INSERT INTO [dbpervolare].[dbo].[Categories] (code,title,description, createDate) VALUES (@code,@title,@description,@createDate);",

  updateCategoryById:
    "UPDATE [dbpervolare].[dbo].[Categories] SET code = @code, title = @title, description = @description, " +
    "updateDate = @updateDate WHERE id = @id",

  deleteCategory:
    "DELETE FROM [dbpervolare].[dbo].[Categories] WHERE id = @id"
};