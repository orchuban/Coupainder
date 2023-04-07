// module.exports = {
//   HOST: "localhost",
//   PORT: "1434",//edit
//   USER: "zkoder",//edit
//   PASSWORD: "123456",//edit
//   DB: "bezkoder_db",//TODO: edit //#name
//   dialect: "mssql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };


module.exports = {
  HOST: "database-coupinder.cql4jschedpv.eu-west-3.rds.amazonaws.com",
  PORT: "1433",//edit
  USER: "admin",//edit
  PASSWORD: "eli123456",//edit
  DB: "Coupainder",//TODO: edit //#name
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
