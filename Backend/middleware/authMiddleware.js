import User from "../model/userRegistration";
exports.restrict = ()=>{
  return(req,res,next)=>{

    

   try {
    
    if (!user) {
        throw new Error();
      }
  
      if(User.role  !== role){
        throw new Error();
      }

      req.user = user;
      next();


   } catch (error) {
             
      res.status(401).send({error:'Not authorise to acces this role'});
    
   }

  }
}

