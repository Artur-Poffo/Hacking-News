import { Schema, model, models } from 'mongoose'

export interface IUser {
  email: string
  password: string
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
})

const User = models.users || model<IUser>('users', UserSchema)

export default User
