
module.exports = (sequelize,DataTypes) =>{
    const Project  = sequelize.define("project", {
    // ID:{
    //     type:DataTypes.Int,
        
    //     }, 
   Project:{
       type:DataTypes.STRING,
    //    allowNull:false
   },
   Contributors:{
    type:DataTypes.STRING,
   
   },
   Project_Description:{
       type:DataTypes.TEXT,
      
   }

    })

    return Project

}