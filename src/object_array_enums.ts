// const person : {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// }= {
//     name: "yota",
//     age: 25,
//     hobbies: ["soccer", "cooking"],
//     role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 3;

// 複数の定数が必要になったとき
enum Role {
  ADMIN, 
  READ_ONLY, 
  AUTHOR
}

const person = {
    name: "yota",
    age: 25,
    hobbies: ["soccer", "cooking"],
    role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
    console.log("読み取り専用ユーザー" );
}
// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "admin", "aaa"];

// let favoriteActivities: string[];
// favoriteActivities = ["aaa"];
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}