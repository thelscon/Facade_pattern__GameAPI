interface IGameState {
    [id : string] : [number , string]
}
class GameState implements IGameState {
    [id : string] : [number , string]
}

interface IGameAPI {
    readonly getBalance : (balance : number) => number
    readonly gameState : (id : string) => IGameState
    readonly getHistory : () => IReportsBase
    readonly changePwd : (userId : string , newPassword : string) => boolean
    readonly submitEntry : (userId : string , numberEntry : number) => boolean
    readonly registerUser : (baseUser : IBaseUsers) => string
}
class GameAPI implements IGameAPI {
    private readonly wallets = new Wallets ()
    private readonly reports = new Reports ()
    private readonly users = new Users ()
    private readonly gameEngine = new GameEngine ()

    getBalance (balance : number) {
        // операции с balance
        return this.wallets.getBalance ('')
    }
    gameState (id : string) {
        return this.gameEngine.GameState
    }
    getHistory () {
        return this.reports.getHistory ()
    }
    changePwd (userId : string,  newPassword : string) {
        return this.users.changePwd (userId , newPassword)
    }
    submitEntry (userId: string, numberEntry: number) {
        return this.gameEngine.submitEntry (userId , numberEntry)
    }
    registerUser (baseUser: IBaseUsers) {
        return this.users.registerUser (baseUser)
    }
}

interface IGameEngine {
    readonly GameState : IGameState

    submitEntry : (userId : string , numberEntry : number) => boolean
}
class GameEngine implements IGameEngine {
    private startTime !: number
    private clock !: number
    private readonly entries : [string , number][] = []
    private gameOpen !: boolean
    private readonly reports = new Reports ()
    private readonly wallets = new Wallets ()
    private readonly gameState = new GameState ()

    get GameState () : IGameState {
        return this.gameState
    }

    submitEntry (userId : string , numberValue : number) {
        return true
    }
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