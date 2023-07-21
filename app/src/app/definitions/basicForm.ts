import {Form} from "@/app/interfaces";
import rules from "@/utils/rules"

const basicFormDefinition : Array<Form> = [
    {
        value: '',
        label: "firstName",
        rules: [rules.required, rules.maxLength(50)]
    } as Form,
    {
        value: '',
        label: "lastName",
        rules: [rules.required, rules.maxLength(50)]
    } as Form,
    {
        value: '',
        label: "mail",
        rules: [rules.required, rules.mail],
        hint: 'hintMail'
    } as Form,
    {
        value: '',
        label: "phoneNumber",
        rules: [rules.required, rules.length(9)]
    } as Form,
]
export {basicFormDefinition}