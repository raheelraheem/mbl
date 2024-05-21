emp_data = [
    {
        name : "Mudassir",
        age : 200.5,
        sal : 2,
        isActice : true
    },
    {
        name : "Haris",
        age : 400,
        sal : 2,
        isActice : false
    },
    {
        name : "Sameer",
        age : 200,
        sal : 2,
        isActice : false
    },
    {
        name : "Hassan",
        age : 600,
        sal : 2,
        isActice : false
    },
]

// console.log(emp_data[1].age);
// console.log(emp_data);



emp_data.forEach(function(data , index){
    console.log(index , data)
})