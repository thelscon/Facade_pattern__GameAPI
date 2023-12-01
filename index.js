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
class WalletsBase {
}
class Wallets {
    _wallets = new WalletsBase();
    _reports = new Reports();
    get wallets() {
        return this._wallets;
    }
    get reports() {
        return this._reports;
    }
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
    _reports = new ReportsBase();
    _rowId;
    get reports() {
        return this._reports;
    }
    get rowId() {
        return this._rowId;
    }
    getHistory() {
        return this._reports;
    }
    logEven(value) {
        return true;
    }
}
