import { CLOSE_REFERRAL_FORM, OPEN_REFERRAL_FORM, SET_FORM_DATA, START_REFERRAL, SUBMIT_REFERRAL } from "./referTypes"



export const startReferral = ()=> {
    return {
        type: START_REFERRAL
    }
}

export const openReferralForm = ()=> {
    return {
        type: OPEN_REFERRAL_FORM
    }
}

export const closeReferralForm = ()=> {
    return {
        type: CLOSE_REFERRAL_FORM
    }
}

export const setFormData = (field: "fullName" | "phoneNumber" | "friendEmail" | "friendAddress"   ,value : string) => {
    return{
        type: SET_FORM_DATA,
        payload: {
            field,value
        }
    }
}

export const submitReferral = () =>{
    return{
        type: SUBMIT_REFERRAL
    }
}