import { Client, Databases } from "appwrite";
import config from "../config/config";

export class Service{
    client=new Client()
    databases;
    buckets;
    constructor(){
        this.client.setEndpoint(config.appwriteURL).setProject(config.appProjectId);
         this.databases=new Databases(this.client)
         this.buckets=new Storage(this.client)
        // this.users=new Users(this.client)
        // this.account=new Account(this.client)
 

}

}