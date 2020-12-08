// ==============================================================================
// Establish & Export the User Model
// ==============================================================================

module.exports = (sequelize, DataTypes) => {
  const dog = sequelize.define("Dog", {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coatLength: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activityLevel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specialNeeds: {
      type: DataTypes.STRING,
      allowNull: false
    },
    briefBio: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  return dog;
};
