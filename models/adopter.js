// ==============================================================================
// Establish & Export the User Model
// ==============================================================================

module.exports = (sequelize, DataTypes) => {
  const adopter = sequelize.define("Adopter", {
  
    contactName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return adopter;
};
