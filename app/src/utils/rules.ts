import i18n from "@/lang/i18n";
import {TranslateResult} from "vue-i18n";

/**
 * All the rules used by input fields are defined here
 * */
export default {


    /**
     * Checks if field is filled
     * */
    required: (v: string): TranslateResult | boolean => {
        if (v !== undefined && v !== null && v !== '') {
            return true
        } else {
            return i18n.t("errorRequired")
        }
    },

    /**
     * Checks if field exceeded maximum amount of characters
     * */
    maxLength: (max: number)=>(v:string): TranslateResult | boolean => {
        if (!v || v.length > max) {
            return i18n.t("errorMaxLength") + max.toString()
        } else {
            return true
        }
    },

    /**
     * Checks if field has exactly given number of characters
     * */
    length: (length: number)=> (v:string): TranslateResult | boolean => {
        if (!v || v.length !== length) {
            return i18n.t("errorLength") + length.toString()
        } else {
            return true
        }
    },

    /**
     * Checks if given address is valid ( first@second.third)
     * */
    mail: function (v: string): TranslateResult | boolean {
        if (/.+@.+\..+/.test(v)) {
            return true
        } else {
            return i18n.t("errorMail")
        }
    },

    /**
     * Checks if given input is number
     * */
    number: function (v: string): TranslateResult | boolean {
        if (!isNaN(Number(v))) {
            return true
        } else {
            return i18n.t("errorNumber")
        }
    },

    /**
     * Checks if given bank account number is valid ( xxx-1234567890/1234 or 1234567890-1234 )
     * */
    accountNumber: function (v: string): TranslateResult | boolean {
        const errorMessage = i18n.t("errorBankAccount")
        if (/.+-.+\/./.test(v) || /.+\/./.test(v)) {

            const firstSplit: Array<string> = v.split('/')

            if (firstSplit[1].length !== 4 || isNaN(Number(firstSplit[1]))) {
                return errorMessage
            }
            if (v.includes('-')) {
                const secondSplit: Array<string> = firstSplit[0].split('-')
                if (!isNaN(Number(secondSplit[0])) && !isNaN(Number(secondSplit[1])) && secondSplit[1].length === 10) {
                    return true
                } else {
                    return errorMessage
                }
            } else if (!isNaN(Number(firstSplit[0])) && firstSplit[0].length === 10) {
                return true
            } else {
                return errorMessage
            }
        } else {
            return errorMessage
        }
    },

    /**
     * Checks if value is true
     * */
    trueRequirement: function (v: boolean): TranslateResult | boolean {
        if (v) {
            return true
        } else {
            return i18n.t("errorAllowPersonalInfo")
        }

    },
}