export interface get {
    id: number,
    iddocumento: string,
    documento: {
        data: string,
        nomecliente: string,
        valor: string 
    }
}

export interface post {
    iddocumento: string,
    documento: {
        data: string,
        nomecliente: string,
        valor: string 
    }
}

export interface login {
    email: string,
    password: string
}