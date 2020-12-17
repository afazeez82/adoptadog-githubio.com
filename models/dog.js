
module.exports = function (sequelize, DataTypes)  {
  const dog = sequelize.define("dog", {

    dogName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogImage: {
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
    },
     favorite: {
       type: DataTypes.BOOLEAN,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  
  });
 dog.associate = function(models) {
    dog.hasMany(models.user, {
 });
   };
  return dog;
};   