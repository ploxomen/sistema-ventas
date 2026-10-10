export type StatusUser = "ONLINE" | "DISABLED" | "RESTORE"
export type StatusProduct = "EN_STOCK" | "AGOTADO" | "POR_AGOTARCE"

type DocumenType = "DNI" | "PASAPORTE" | "CARNET_EXTRANJERIA"
export interface User {
    id ?: number,
    documentType : DocumenType | "",
    documentNumber : string,
    lastName: string,
    firstName: string,
    email: string,
    address?: string,
    phone?: string,
    dateOfBirth?: string,
    status ?: StatusUser
}

export interface UserForm extends User{
    roleIds : number []
}