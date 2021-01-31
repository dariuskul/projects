import jwt from 'jsonwebtoken'
const verify =(req,res,next) =>{
    let accessToken = req.cookies.jwt

    if(!accessToken){
        console.log("HAHAHAHAHA");
        return res.status(403).send();
    }

    let payload
    try{
        //use the jwt.verify method to verify the access token
        //throws an error if the token has expired or has a invalid signature
        payload = jwt.verify(accessToken, process.env.PRIVATE)
        next()
    }
    catch(e){
        //if an error occured return request unauthorized error
        return res.status(401).send()
    }
}

export default verify;