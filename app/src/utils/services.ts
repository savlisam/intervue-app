import {AlertInfo, BasicInfo, FinanceInfo, Form, IdentificationInfo} from "@/app/interfaces";
import {EventBus} from "@/utils/eventBus";

function formToInfo<FormType>(form: Array<Form>, info: FormType ): FormType{
    const newInfo: FormType = info;
    for (const key in newInfo) {
        if (Object.prototype.hasOwnProperty.call(newInfo, key)) {
            const newVal = form.find(field=>field.label===key)?.value
            if(newVal){
                newInfo[key as keyof FormType] = newVal as unknown as FormType[keyof FormType]
            }
        }
    }
    return newInfo
}

function createBasicInfo():BasicInfo{
    return {
        firstName: '',
        lastName:'',
        mail:'',
        phoneNumber:''
    } as BasicInfo
}

function createIdentificationInfo():IdentificationInfo{
    return {
        idNumber : '',
        personalId:'',
        city:'',
        street:'',
        houseNumber:'',
        PSC:''
    } as IdentificationInfo
}

function createFinanceInfo():FinanceInfo{
    return {
        investingAmount:0,
        bankAccountNumber:''
    } as FinanceInfo
}

function createAlert(message:string, type:string){
    const newAlert: AlertInfo = {
        message:message,
        type:type,
        on:true
    } as AlertInfo
    EventBus.$emit('alert',newAlert)
}

export {formToInfo, createBasicInfo, createIdentificationInfo,createFinanceInfo, createAlert}