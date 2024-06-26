const jwt = require ("jsonwebtoken");
const user = require ("../models/users")

const validarJWT = async (req, res, next) => {

    const token = req.header("x-token");

    if (!token) {
        return res.status(401).json ({
            ok: false,
            msg: "No hay token en la petición",
            data: {}
        });
    }

try {
const { id }= jwt.verify(token, process.env.JWT_SECRET);
const usuario = await user.findById (id);

if (!usuario){
    return res.status(401).json ({
        ok:false,
        msg:"Token no valido",
        data: {}
    })
}
req.usuario = usuario
next();
} catch (error) {
    return res.status (401).json ({
        ok:false,
        msg: "Token no valido",
        data: {},
})
}
};

module.exports ={validarJWT} 