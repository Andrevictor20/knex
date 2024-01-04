var database = require('./database');
async function testeTransacao(){
    await database.transaction(async trans=>{
       try{
        await database.insert({nome:"EstudioErrado2"}).table("estudios")
           await database.insert({nome:"estudioAndre3"}).table("estudio")
          
          
       }catch(err){
           console.log(err)
       }
   }
)}
testeTransacao()