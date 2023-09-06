const conexion = require('./db');
//GUARDAR un REGISTRO

exports.guardartarea = (req, res)=>{
    const id = req.body.id;
    const tarea = req.body.tareas;
    
    
    
    conexion.query('INSERT INTO tareas SET ?',{id:id, tarea:tarea},(error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            //res.redirect('/');  
            console.log("LOS DATOS SE GUARDARON");       
        }
});
};