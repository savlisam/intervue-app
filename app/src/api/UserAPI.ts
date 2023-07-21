import {FormInfo} from "@/app/interfaces";

const UserAPI = {
    DOMAIN:"form",

    getUsers(){
       return  fetch('https://jsonplaceholder.typicode.com/users')
    },

    getUser(id: number){
        return fetch('https://jsonplaceholder.typicode.com/users/'+ id)
    },

    createUser(data: FormInfo){
        return  fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
}

export {UserAPI}