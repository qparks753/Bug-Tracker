module.exports = {
    HOST: process.env.REACT_APP_DB_Host,
    USER:process.env.REACT_APP_DB_User,
    Password: process.env.REACT_APP_DB_Password,
    DB: process.env.REACT_APP_DB_Name,
    dialect: "mysql",

   
    


    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
}