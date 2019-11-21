module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('Country', {
      countryname: DataTypes.STRING,
    }, {});
    Country.associate = function(models) {
      // Each question belongs to a user
    //   Country.hasMany(models.user,{
    //     foreignKey: 'countryid',
    //     as: 'user',
    //   });
  
    };
    return Country;
  };