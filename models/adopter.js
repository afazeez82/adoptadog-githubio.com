
module.exports = function (sequelize, DataTypes)  {
  const adopter = sequelize.define("adopter", {
    currentDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dogName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    altPhone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    individualsResiding: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    agreement: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ownRent: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    landlord: {
      type: DataTypes.STRING,
      allowNull: false
    },
    homeDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    experience: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    petSurrender: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    currentPetDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hoursAlone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hoursTogether: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dogKept: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogSleep: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogTraining: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vet: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  adopter.associate = function(models) {
   adopter.hasMany(models.dog, {
});
  };
  return adopter;
};



