import jwtService from "../services/jwt-services.js"
const jwtAuthenticator =(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1] // pegando/verificando o token de autenticação
        if(jwtService.verifyAccessToken(token)){
            next()
        }  else {
            throw new Error("");
        }
    } catch (error) {
        res.sendStatus(401);
    }
}


export default jwtAuthenticator