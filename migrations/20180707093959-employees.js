'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('employees', 'Deleted', Sequelize.BOOLEAN, {
        allowNull: true
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [queryInterface.removeColumn('employees', 'Deleted')];
  }
};
