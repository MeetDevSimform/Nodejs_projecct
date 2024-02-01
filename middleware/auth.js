import jwt   from "jsonwebtoken";


const Authenticate =(req,res,next)=>{
    const token= req.header.authorization?.split(" ")[1]


    try {
        if(token){
            const decodeToken=jwt.verify(token,"sEcReT")
            req.userId=decodeToken?.id
        }
        
    } catch (error) {

        return res.status(401).json(error)

        
    }

next();

}


export default Authenticate