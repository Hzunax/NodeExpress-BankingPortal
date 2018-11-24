const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync(__dirname + '/json/accounts.json', {encoding: 'utf8'});
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(__dirname + '/json/users.json', {encoding: 'utf8'});
const users = JSON.parse(userData);

let writeJSON = () => {
    let accountsJSON = JSON.stringify(accounts);
    fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON, 'utf8');
}

module.exports = {
    accounts: accounts,
    users: users,
    writeJSON: writeJSON,
};