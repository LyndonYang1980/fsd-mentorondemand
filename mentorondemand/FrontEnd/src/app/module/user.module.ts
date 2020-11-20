export class UserModule {

  constructor(
    public userId: number,
    public userName: string,
    public userEmail: string,
    public contactNumber:string,
    public password:string,
    public status:string
  ){}
} 