interface IAuthor {
    id: number,
    username: string
}

interface ICategory {
    id: number,
    title: string
}

interface IPost {
    id: number,
    title: string,
    desc: string,
    extra: IAuthor[] | ICategory[]
}

interface IPostBetter<T> {
    id: number,
    title: string,
    desc: string,
    extra: T[]
}

const post1: IPostBetter<IAuthor> = {
    id: 1,
    title: "Welcome",
    desc: "this is a title secrion",
    extra: [{ id: 1, username: "ryan" }],
}
const post2: IPostBetter<ICategory> = {
    id: 1,
    title: "Welcome",
    desc: "this is a title secrion",
    extra: [{ id: 1, title: "ryan" }],
}

console.log(post2)