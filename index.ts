interface IGameState {
    [id : string] : [number , string]
}
interface IGameAPI {
    readonly wallets : IWallets
    readonly reports : IReports
    readonly users : IUsers
    readonly gameEngine : IGameEngine

    readonly getBalance : (balance : number) => number
    readonly gameState : (id : string) => IGameState
    readonly getHistory : () => ReportsType
    readonly changePwd : (userId : string , newPassword : string) => boolean
    readonly submitEntry : (userId : string , numberEntry : number) => boolean
    readonly registerUser : (baseUser : IBaseUser) => string
}

class GameAPI implements IGameAPI {
    private readonly _wallets : IWallets
    private readonly _reports : IReports
    private readonly _users : IUsers
    private readonly _gameEmgine : IGameEngine

    get wallets () : IWallets {
        return this._wallets
    }
    get reports () : IReports {
        return this._reports
    }
    get users () : IUsers {
        return this._users
    }
    get gameEngine () : IGameEngine {
        return this._gameEmgine
    }
}

interface IGameEngine {
    startTime : number
    clock : number
    entries : [string , number][]
    gameOpen : boolean
    reports : IReports
    wallets : IWallets
    GameState : IGameState

    submitEntry : (userId : string , numberEntry : number) => boolean
}

interface IBaseUsers {
    [id : string ] : string
}
class BaseUsers implements IBaseUsers {
    [id : string ] : string
}
interface IBaseUsersId {
    [id : string] : IBaseUsers
}
class BaseUsersId implements IBaseUsersId {
    [id : string] : IBaseUsers
}
interface IUsers {
    readonly registerUser : (baseUser : IBaseUsers) => string
    readonly editUser : (userId : string , newUserData : IBaseUsers) => boolean
    readonly changePwd : (userId : string , newPassword : string) => boolean
}
class Users implements IUsers {
    private readonly users : IBaseUsers = new BaseUsers ()
    private readonly reports : IReports = new Reports ()
    private readonly wallets : IWallets = new Wallets ()

    registerUser (baseUser : IBaseUsers) {
        return 'registerUser'
    }
    editUser (userId : string , newUserData : IBaseUsers) {
        return true
    }
    changePwd (userId : string , newPassword : string) {
        return true
    }
}

interface IWalletsBase {
    [id : string] : number
}
class WalletsBase implements IWalletsBase {
    [id : string] : number
}
interface IWallets {
    readonly getBalance : (userId : string) => number
    readonly adjustBalance : (userId : string , newBalance : number) => number
    readonly createWallet : (userId : string) => boolean
}
class Wallets implements IWallets {
    private readonly wallets : IWalletsBase = new WalletsBase ()
    private readonly reports : IReports = new Reports ()

    getBalance (id : string) {
        return 1
    }
    adjustBalance (id : string , balance : number) {
        return 1
    }
    createWallet (id : string) {
        return true
    }
}

interface IReportsBase {
    [id : string] : [number , string]
}
class ReportsBase implements IReportsBase {
    [id : string] : [number , string]
}
interface IReports {
    readonly getHistory : () => IReportsBase
    readonly logEven : (value : string) => boolean
}
class Reports implements IReports {
    private readonly reports : IReportsBase = new ReportsBase ()
    private readonly rowId !: number

    getHistory () {
        return this.reports
    }
    logEven (value : string) {
        return true
    }
}