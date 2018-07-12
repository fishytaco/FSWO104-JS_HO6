'use strict';
module.exports = (sequelize, DataTypes) => {
  const employees = sequelize.define(
    'employees',
    {
      EmployeeId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      Deleted: DataTypes.BOOLEAN
    },
    {
      timestamps: false
    }
  );

  return employees;
};