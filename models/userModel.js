module.exports = (sequelize,DataTypes) =>{
    const User  = sequelize.define("user", {
  ID:{
       type:DataTypes.INTEGER,
     
   },
   FirstName:{
    type:DataTypes.STRING,
   
   },
   LastName:{
       type:DataTypes.STRING,
      
   },
   Email:{
    type:DataTypes.TEXT,
   
},
   Phone:{
    type:DataTypes.STRING,
   
}

    })

    return User
}