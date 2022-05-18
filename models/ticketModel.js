module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("ticket", {
    // ID:{
    //         type:DataTypes.int,

    //     },
    userid: {
      type: DataTypes.INTEGER,
    },
    Ticket_Title: {
      type: DataTypes.STRING,
    },
    Author: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.STRING,
    },
    Ticket_status: {
      type: DataTypes.STRING,
    },
    Ticket_type: {
      type: DataTypes.STRING,
    },
    Priority: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps:false
  }
  );

  return Ticket;
};
