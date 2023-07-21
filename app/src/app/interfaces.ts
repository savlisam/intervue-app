interface BasicInfo{
    firstName: string,
    lastName: string,
    mail: string,
    phoneNumber: string
}


interface IdentificationInfo{
    idNumber:string,
    personalId:string,
    city:string,
    street:string,
    houseNumber:string,
    PSC:string
}

interface FinanceInfo{
    bankAccountNumber:string,
    investingAmount:number,
}

interface FormInfo{
    firstName: string,
    lastName: string,
    mail: string,
    phoneNumber: string
    idNumber:string,
    personalId:string,
    city:string,
    street:string,
    houseNumber:string,
    PSC:string
    bankAccountNumber:string,
    investingAmount:number,
}

interface Form{
    value: string,
    label: string,
    rules: Array<()=> string|boolean>,
    length?: number,
    hint?: string,
}

interface AlertInfo{
    message:string,
    type:string,
    on:boolean
}

export {BasicInfo, FinanceInfo, IdentificationInfo, FormInfo, Form, AlertInfo}