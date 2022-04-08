const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]
averageStudentMark(students[2]);
averageGroupMark(students);
//

function averageStudentMark (){
    const choiseStudent = prompt ('Choise a student');
    const marksStudent = choiseStudent.marks.map();
    const sumMarksStudenet = marksStudent.reduce ((acc,marksStudent)=>acc + marksStudent[i]);
    const avageSumMarks = sumMarksStudenet / marksStudent.length;
    console.log (avageSumMarks);
}

function averageGroupMark () {
    const marksAllStudents = students.marks.map (searchAllMarks);
    const sumAllMarks = marksAllStudents.reduce ((acc,marksAllStudents)=> acc + marksAllStudents[i]);
    const avarageSumAllMarks = sumAllMarks / marksAllStudents.length;
    console.log (avarageSumAllMarks);
}

function searchAllMarks (item) {
    return students.marks;
}