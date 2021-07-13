import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage{
    static instance = new Storage();

    add = async (key, value) => {
        try{

            await AsyncStorage.setItem(key, value);
            return true;

        } catch (err) {

            console.error("[Storage error {adding item}] ", err);
            return false;
        }
    }

    get = async ( key ) => {
        try{
            return await AsyncStorage.getItem(key);
        } catch (err){
            console.error("[Storage error {gettin item}] ", err);
            throw Error(err)
        }
    }

    getAll=  async (keys) => {
        try{
            return await AsyncStorage.getItem(keys);
        }catch(err){
            console.error("[Storage error {getting all}] ", err);
            throw Error(err)
        }
        
    }

    getAllKeys = async () =>{
        try{
            const keys = await AsyncStorage.getAllKeys(); 
            return keys
        }catch(err){
            console.error("[Storage error {getting keys}] ", err);
            throw Error(err)
        }
    }

    remove = async (key) =>{
        try{
            await AsyncStorage.removeItem(key);
            return true;
        } catch(err){
            console.error("[Storage error {removing item}] ", err);
            return false;
        }
    }

    
}

export default Storage;