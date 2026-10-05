type DocumenType = "DNI" | "PASAPORTE" | "CARNET_EXTRANJERIA"
export interface Role {
    id : number,
    description ?: string,
    name ?: string,
    icon ?: string
}
export interface User {
    id ?: number,
    documentType : DocumenType,
    documentNumber : string,
    lastName: string,
    firstName: string,
    email: string,
    address?: string,
    phone?: string,
    dateOfBirth?: string,
    userRoles : number[]
}