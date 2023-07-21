import {Form} from "@/app/interfaces";
import rules from "@/utils/rules"

const identificationFormDefinition : Array<Form> = [
    {
        value: '',
        label: "personalId",
        rules: [rules.required,rules.number, rules.length(10)]
    } as Form,
    {
        value: '',
        label: "idNumber",
        rules: [rules.required,rules.number, rules.length(9)]
    } as Form,
    {
        value: '',
        label: "city",
        rules: [rules.required, rules.maxLength(50)]
    } as Form,
    {
        value: '',
        label: "street",
        rules: [rules.required, rules.maxLength(50)]
    } as Form,
    {
        value: '',
        label: "houseNumber",
        rules: [rules.required, rules.maxLength(20)]
    } as Form,
    {
        value: '',
        label: "PSC",
        rules: [rules.required,rules.number, rules.length(5)]
    } as Form,
]
export {identificationFormDefinition}