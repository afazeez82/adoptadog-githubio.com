
module.exports = function (sequelize, DataTypes)  {
  const dog = sequelize.define("Dog", {
<<<<<<< Updated upstream
    dogName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogAge: {
=======
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
>>>>>>> Stashed changes
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
    },
    favorite: {
      type: Boolean,
      default: false
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