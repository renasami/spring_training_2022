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
  name: string,
  token: string,
  friends: User[],
  groups:Group[]
}
