"use strict";
class GameState {
}
class GameAPI {
    wallets = new Wallets();
    reports = new Reports();
    users = new Users();
    gameEngine = new GameEngine();
    getBalance(balance) {
        // операции с balance
        return this.wallets.getBalance('');
    }
    gameState(id) {
        return this.gameEngine.GameState;
    }
    getHistory() {
        return this.reports.getHistory();
    }
    changePwd(userId, newPassword) {
        return this.users.changePwd(userId, newPassword);
    }
    submitEntry(userId, numberEntry) {
        return this.gameEngine.submitEntry(userId, numberEntry);
    }
    registerUser(baseUser) {
        return this.users.registerUser(baseUser);
    }
}
class GameEngine {
    startTime;
    clock;
    entries = [];
    gameOpen;
    reports = new Reports();
    wallets = new Wallets();
    gameState = new GameState();
    get GameState() {
        return this.gameState;
    }
    submitEntry(userId, numberValue) {
        return true;
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
