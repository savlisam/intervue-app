import {Form} from "@/app/interfaces";
import rules from "@/utils/rules"

const financeFormDefinition : Array<Form> = [
    {
        value: '1000',
        label: "investAmount",
        rules: [rules.required, rules.number]
    } as Form,
    {
        value: '',
        label: "bankAccountNumber",
        rules: [rules.required, rules.accountNumber],
        hint: 'hintAccountNumber'
    } as Form,
]
export {financeFormDefinition}