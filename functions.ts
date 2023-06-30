// function accept:string, return string
const hello_world = (name: string): string => {
    console.log(`hello world: ${name}`)
    return `hello world: ${name}`
}
hello_world("ryan")


// function accept:string, return: NO
const no_return = (name: string): void => {
    console.log(`hello world: ${name}`)
    // return `hello world: ${name}`
}
no_return("ryan")


// function not required
const add = (no1: number, no2: number, no3?: number) => {
    if (no3) {
        console.log(no1 + no2 + no3)
        return no1 + no2 + no3
    } else {
        console.log(no1 + no2)
        return no1 + no2
    }
}
add(1, 2)
add(1, 2, 3)



