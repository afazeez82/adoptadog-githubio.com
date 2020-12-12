// ==============================================================================
// Establish & Export the User Model
// ==============================================================================

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return user;
};
