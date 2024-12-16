const config={
appwriteURL:String(import.meta.env.VITE_APP_APPWRITE_URL),
appProjectId:String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
appwriteDatabaseId:String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
appwriteCollectionsId:String(import.meta.env.VITE_APP_COLLECTIONS_ID),
appwriteBucketId:String(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID)

}
export default config