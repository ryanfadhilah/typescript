// STRING
let word: string = "hello"
word = "hello wordl"

// NUMBER
let integer: number = 21
integer = 31

// STRING or NUMBER
let word_integer: string | number = "hello"
word_integer = 21

// ARRAY of WORD
let array_word: string[] = ["ryan", "fadhilah"]
array_word = ["fadhilah", "ryan"]

// ARRAY of NUMBER
let array_number: number[] = [1, 2, 3, 4, 5]
array_number = [5, 4, 3, 2, 1]

// ARRAY of NUMBER or WORD
let array_number_word: (string | number)[] = [1, "ryan", 2, "fadhilah"]
array_number_word = [1, "fadhilah", 1, "ryan"]

// ARRAY of ANY data TYPES
let test_any: any[]
test_any = [1, "2", false, {}, []]

// OBJECT
let object: {
    usename: string,
    age: number,
    isAdmin: boolean
    phone?: string
}

object = {
    usename: "ryan",
    age: 23,
    isAdmin: true,
    // phone:"+62"
}


