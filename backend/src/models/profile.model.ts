import { Schema,model } from "mongoose"
interface IProfile extends Document{
    userImage:string,
    gender:string,
    dateOfBirth:string,
    about:string,
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
})

const Profile = model('Profile',profileSchema)

export {Profile,IProfile}



