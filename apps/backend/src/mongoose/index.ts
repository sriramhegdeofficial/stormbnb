import mongoose, { ConnectOptions } from 'mongoose';


export const startDB = async (env: string) => {
    console.log(env);
    if(env === 'development') {
        
        if(process.env.MONGODB_DEV) {
            await mongoose.connect(process.env.MONGODB_DEV,{
                useNewUrlParser: true,
                useUnifiedTopology: true
              } as ConnectOptions)
            .then(() => console.log('started MongoDB Successfully.'));
        }
      
    }
 }