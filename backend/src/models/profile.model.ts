import { Schema,model } from "mongoose"
interface IProfile extends Document{
    userImage:string,
    gender:string,
    dateOfBirth:string,
    about:string,
    theme:boolean,
}
const profileSchema = new Schema<IProfile>({
    userImage:{
      type:String,
    },
    gender: {
        type: String,
        enum:['male','female','other']
    },
    dateOfBirth: {
        type: String,
    },
    about: {
        type: String,
        trim: true,
    },
    theme:{
        type:Boolean,
        default:false
    }
})

const Profile = model('Profile',profileSchema)

export {Profile,IProfile}



