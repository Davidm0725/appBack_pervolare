import app from "./app";

// obtener el puerto donde escucha el api
app.listen(app.get("port"));

console.log("Server on port", app.get("port"));
