// parent
interface IUser {
    username: string,
    email: string,
    age: number,
    gender?: "male" | "female"
}

// child
interface IEmployee extends IUser {
    employeId: number
}


const employe1: IEmployee = {
    employeId: 1,
    username: "ryan",
    age: 23,
    email: "ryan@gmail.com"
}
const employe2: IEmployee = {
    employeId: 2,
    username: "goldie",
    age: 23,
    email: "goldie@gmail.com",
    gender: "female"
}