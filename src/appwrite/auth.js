import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService{
    client= new Client();
    account;
    constructor(){
        this.client.setEndpoint(config.appwriteURL);
        this.client.setProject(config.appProjectId);
        this.account=new Account(this.client)
    }
    async createAccount({email, password,name}){
        try {
const userAccount = await this.account.create(ID.unique(), email, password, name)
         
if(userAccount){
    return  this.login({email, password})
}else{
    return userAccount
}
        }catch(e){}
    }
    async login({email, password,}){
        try{
            return await this.account.createEmailPasswordSession(email, password)
        }catch(e){
            throw e;
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.error(error,"Appwrite Error")
            throw error;
        }
        return null
    }
    async logout(){
        try{
            await this.account.deleteSession()
        }catch(e){
            console.log(e,"error logout")
        }
    }
}
