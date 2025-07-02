import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://fra.cloud.appwrite.io/v1',
    platform: 'com.vivek.viv',
    projectId: '6857d15c0020da21df1a',
    databaseId: '6857d6730011b84b0f8a',
    usersCollectionId: '6857d6c7000de13277dc',
    videosColletionId: '685b9115001446368109',
    storageId: '685badee00042d0fb7ed'
}

const client = new Client();
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)
    ;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email: string, password: string, user_name: string) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            user_name
        )

        if(!newAccount) {
            throw new Error('User creation failed');
        }

        const avatarUrl = avatars.getInitials(user_name);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                user_name,
                avatar: avatarUrl
            }
        )

        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
    }
}

export const signIn = async (email: string, password: string) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);

        return session;
    } catch (error) {
        console.error('Error signing in:', error);
        throw new Error('Failed to sign in');
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.error('Error getting current user:', error);
        throw new Error('Failed to get current user');
    }
}