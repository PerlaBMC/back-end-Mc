require ("dotenv").config();
const express=require("express");
const app=express();
const {dbConnection}=require ("./database/confing")
const cors = require ("cors")

dbConnection ();
app.use(cors());
app.use(express.json());


app.get("/", (req, res)=>{
    console.log("welcome to Mc back")
});

app.use ("/api/usuarios", require ("./routes/users.routes"));
app.use ("/api/auth", require ("./routes/auth.routes"));
app.use ("/api/products", require ("./routes/products.routes"));
app.use ("/api/zapatos", require ("./routes/products.routes"));
app.use ("/api/joyeria", require ("./routes/products.routes"));
app.use ("/api/ropa", require ("./routes/products.routes"));


app.listen(process.env.PORT, ()=>{
    console.log(`Servidor en línea en el ${process.env.PORT}`);
});

