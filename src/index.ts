interface User {
    name: string;
    age: number;
    adresse?: string;
    [propName: string]: any
}

const user: User = {
    name: "zakaria",
    age: 24
}