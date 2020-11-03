export class UserModule {

  constructor(
    public userId: number,
    public userName: string,
    public email: string,
    public contactNumber:string,
    public password:string,
    public status:string
  ){}
} 