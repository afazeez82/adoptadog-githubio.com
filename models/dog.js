// ==============================================================================
// Establish & Export the User Model
// ==============================================================================

module.exports = function (sequelize, DataTypes)  {
  const dog = sequelize.define("Dog", {
    dogName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogAge: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogBreed: {
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
  dog.associate = function(models) {
    dog.belongsTo(models.adopter, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return dog;
};