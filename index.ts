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

interface IBaseUser {
    [property : string ] : string
}
interface IUser {
    [id : string] : IBaseUser
}
interface IUsers {
    users : IUser[]
    reports : IReports
    wallets : IWallets

    registerUser : (baseUser : IBaseUser) => string
    editUser : (userId : string , newUserData : IBaseUser) => boolean
    changePwd : (userId : string , newPassword : string) => boolean
}

interface IWalletsBase {
    [id : string] : number
}
class WalletsBase implements IWalletsBase {
    [id : string] : number
}
interface IWallets {
    readonly wallets : IWalletsBase
    readonly reports : IReports

    readonly getBalance : (userId : string) => number
    readonly adjustBalance : (userId : string , newBalance : number) => number
    readonly createWallet : (userId : string) => boolean
}
class Wallets implements IWallets {
    private readonly _wallets : IWalletsBase = new WalletsBase ()
    private readonly _reports : IReports = new Reports ()

    get wallets () : IWalletsBase {
        return this._wallets
    }
    get reports () : IReports {
        return this._reports
    }

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
    readonly reports : IReportsBase
    readonly rowId : number

    readonly getHistory : () => IReportsBase
    readonly logEven : (value : string) => boolean
}
class Reports implements IReports {
    private readonly _reports : IReportsBase = new ReportsBase ()
    private readonly _rowId !: number

    get reports () : IReportsBase {
        return this._reports
    }
    get rowId () : number {
        return this._rowId
    }

    getHistory () {
        return this._reports
    }
    logEven (value : string) {
        return true
    }
}