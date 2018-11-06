const oracledb = require("oracledb");
function openCase(caseID, checkboxvalue) {
  console.log(checkboxvalue);
  return new Promise((resolve, reject) => {
    oracledb.getConnection();
  });
}

module.exports = {
  openCase
};
