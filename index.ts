class School{
    name: string;
    students: Student[] = [];
    teachers: Teacher[]= [];

    addStudent(stdObj: Student) {
        this.students.push(stdObj)
    }
    addTeacher(teacherObj: Teacher) {
        this.teachers.push(teacherObj)
    };

    constructor(name: string){
        this.name = name;
    }
}

class Student{
    name: string;
    age: number;
    schoolName: string;
    constructor(name: string, age: number, schoolName: string){
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}



class Teacher extends Student {
    
}

// School
 let school1 = new School("KinderGarten School");
 let school2 = new School("Karachi Public School");
 let school3 = new School("Bright Future");

 // Students
 let s1 = new Student("Hayat", 4, school1.name);
 let s2 = new Student("Ayat", 4, school2.name);
 let s3 = new Student("Mohib", 3, school3.name);
 let s4 = new Student("Hooriya", 6, school1.name);
 let s5 = new Student("Khurram", 5, school2.name);
 let s6 = new Student("Mubashir", 4, school3.name);

// Teachers
 let t1 = new Teacher("Amna", 30, school1.name);
 let t2 = new Teacher("Asia", 28, school2.name);
 let t3 = new Teacher("Farah", 32, school3.name);


 school1.addStudent(s1);
 school2.addStudent(s2);
 school3.addStudent(s3);
 school1.addStudent(s4);
 school2.addStudent(s5);
 school3.addStudent(s6);

 school1.addTeacher(t1);
 school2.addTeacher(t2);
 school3.addTeacher(t3);


 console.log(school1);
 console.log(school2);
 console.log(school3);
 
 
 
 


//  console.log(school1);
//  console.log(school2);
 
 