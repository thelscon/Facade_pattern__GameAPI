"use strict";
class GameAPI {
    _wallets;
    _reports;
    _users;
    _gameEmgine;
    get wallets() {
        return this._wallets;
    }
    get reports() {
        return this._reports;
    }
    get users() {
        return this._users;
    }
    get gameEngine() {
        return this._gameEmgine;
    }
}
class BaseUsers {
}
class BaseUsersId {
}
class Users {
    users = new BaseUsers();
    reports = new Reports();
    wallets = new Wallets();
    registerUser(baseUser) {
        return 'registerUser';
    }
    editUser(userId, newUserData) {
        return true;
    }
    changePwd(userId, newPassword) {
        return true;
    }
}
class WalletsBase {
}
class Wallets {
    wallets = new WalletsBase();
    reports = new Reports();
    getBalance(id) {
        return 1;
    }
    adjustBalance(id, balance) {
        return 1;
    }
    createWallet(id) {
        return true;
    }
}
class ReportsBase {
}
class Reports {
    reports = new ReportsBase();
    rowId;
    getHistory() {
        return this.reports;
    }
    logEven(value) {
        return true;
    }
}
