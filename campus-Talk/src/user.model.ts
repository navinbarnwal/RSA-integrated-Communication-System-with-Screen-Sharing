module.exports = (sequelize, Sequelize) => {
  const userDetail = sequelize.define('user', {
    name: {
      type : Sequelize.String
    },
    username: {
      type : Sequelize.String
    },
    department: {
      type : Sequelize.String
    },
    macAddress: {
      type : Sequelize.String
    }
  });
  return userDetail;
};
