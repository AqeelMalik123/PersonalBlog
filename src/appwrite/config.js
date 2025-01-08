import { Client, Databases, Query } from "appwrite";
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
async createPost(slug,{title,content,image}){
    const response=await this.databases.createDocument(config.appwriteDatabaseId,config.appwriteCollectionsId,{title,slug,content,image})
    return response.data
}
async updatePost(slug,{title,status,content,image}){
    const response=await this.databases.updateDocument(config.appwriteDatabaseId,config.appwriteCollectionsId,slug,{title,status,content,image})
    return response.data
}
async deletePost(slug){
    try{
        await this.databases.deleteDocument(config.appwriteDatabaseId,config.appwriteCollectionsId,slug)
        return {message:"Post deleted successfully"}
    }catch(e){
        console.error(e,"Error deleting post")
        throw e
    }
}

async getAllPosts(){
    const response=await this.databases.listDocuments(config.appwriteDatabaseId,config.appwriteCollectionsId)
    return response.data
}
async getPost(queries=[Query.equal('status','active')]){
    try{
        const response=await this.databases.queryDocuments(config.appwriteDatabaseId,config.appwriteCollectionsId,queries)
        return response.data
    }catch(e){
        console.error(e,"Error getting post")
        throw e
    }

}
async uploadFile(file){
    try{
        return await this.bucket.createFile(config.appwriteBucketId,ID.unique(),file,)
        }catch(e){
            console.error(e,"Error uploading file")
            throw e
    
    }
}
async deleteFile(fileId){
    try{
        await this.bucket.deleteFile(config.appwriteBucketId,fileId)
        return {message:"File deleted successfully"}
    }catch(e){
        console.error(e,"Error deleting file")
        throw e
    }
}

}