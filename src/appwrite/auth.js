import conf from '../conf/conf.js' // For the secret keys

import {Client, Account, ID} from 'appwrite'

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // Create a new account
    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if (userAccount){
                // call another method to create a profile
                return this.login({email,password})
            }
            else{
                return userAccount;
            }
        }
        catch(error){
            console.log("APPwrite Error : CreateAccount :",error.message);
            throw error;
        }
    }

    // Login to an existing account
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)
        }catch(error){
            console.log("Appwrite Service : Login : Error : ",error);
            throw error;
        }
    }

    // Get the currently signed in user
    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("AppWrite auth.js : getCurrentUser",error.message);
            //throw error;
        }
        return null;
    }

    // Logout of the current session
    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(error){
            console.log("AppWrite auth.js : logout : error : ",error.message);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;