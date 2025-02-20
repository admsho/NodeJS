import { Sequelize } from "sequelize"; //to communicate with database

// Option 1: Passing a connection URI

//const sequelize = new Sequelize(`SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=ReactsDB;Data Source=localhost\SQLEXPRESS`) // Example for postgres


// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './DB/reactDB.db'
});


/*const sequelize = new Sequelize('ReactsDB', 'sa', '123', {
  host: 'localhost', // e.g., 'localhost' for local, or IP address
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true // Use encryption for secure connections
     // trustServerCertificate: true, // If using a self-signed certificate for local dev
    },
  },
});
*/

export default sequelize;