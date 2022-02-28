export type User = {
    id:number,
    username:string,
}

export type Group = {
    id:number;
    name:string;
    members:User[];
}

export type Store = {
  id:number,
  name: string,
  password:string,
  token: string,
  key: string,
  friends: User[],
  groups:Group[],
  index: number
}
