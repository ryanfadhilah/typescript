// parameter type
type user_type = {
    username: string,
    age: number,
    is_adnim: boolean,
    phone?: string
}

const process_user = (user: user_type) => {
    console.log(user.username)
    console.log(user.age)
    console.log(user.is_adnim)
    if (user.phone) {
        console.log(user.phone)
    }
}

// function type
type f_no_return = (a: any, b: any, c?: any) => void

const addition: f_no_return = (num1, num2, num3) => {
    if (num3) {
        console.log(num1 + num2 + num3)
    } else {
        console.log(num1 + num2)
    }
}