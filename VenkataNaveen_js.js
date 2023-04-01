const url = "http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521"
let studentData;
let schoolName;

function creatre() {
    document.getElementById("school-logo").src="https://davbundu.org/wp-content/uploads/2020/03/cropped-dav-bundu.png"
    document.getElementById("school-name").textContent=studentData.SchoolName
    document.getElementById("school-address").textContent=studentData.SchoolAddress
    document.getElementById("school-phones").textContent=studentData.SchoolPhoneNumber
    document.getElementById("school-email").textContent=studentData.SchoolEmail
    document.getElementById("roll-no").textContent=studentData.RollNumber
    
    document.getElementById("class").textContent=studentData.ClassName
    document.getElementById("student-name").textContent=studentData.Name
    document.getElementById("mother-name").textContent=studentData.MotherName
    document.getElementById("father-name").textContent=studentData.FatherName
    document.getElementById("dob").textContent=studentData.DOB
    document.getElementById("attendance").textContent=studentData.WorkingDays
    let total = 0;
    const studentMarks = studentData.lstStudent.filter((data,index)=>{
        if(index%2==0){
            console.log(data.Marks)
            total +=  data.Marks
            return data;    
        }
    console.log(total)
    });
    
    const percentage = total/640 * 100
    console.log(percentage)
    console.log(studentMarks)
    document.getElementById("telugu").textContent = studentMarks[0].Marks
    document.getElementById("hindi").textContent = studentMarks[1].Marks
    document.getElementById("english").textContent = studentMarks[2].Marks
    document.getElementById("mathematics").textContent = studentMarks[3].Marks
    document.getElementById("evs").textContent = studentMarks[4].Marks
    document.getElementById("gk").textContent = studentMarks[5].Marks
    document.getElementById("computerscience").textContent = studentMarks[6].Marks
    document.getElementById("socialstudies").textContent = studentMarks[7].Marks
    
    document.getElementById("telugu-g").textContent = studentMarks[0].SubjectGrade
    document.getElementById("hindi-g").textContent = studentMarks[1].SubjectGrade
    document.getElementById("english-g").textContent = studentMarks[2].SubjectGrade
    document.getElementById("mathematics-g").textContent = studentMarks[3].SubjectGrade
    document.getElementById("evs-g").textContent = studentMarks[4].SubjectGrade
    document.getElementById("gk-g").textContent = studentMarks[5].SubjectGrade
    document.getElementById("computerscience-g").textContent = studentMarks[6].SubjectGrade
    document.getElementById("socialstudies-g").textContent = studentMarks[7].SubjectGrade


    document.getElementById("marks").textContent = `Result: Pass`
    document.getElementById("percentage").textContent = `Percentage: ${percentage}%`
    document.getElementById("grade").textContent = `Grade: A`

}

fetch(url)
    .then((res) => res.json())
    .then((res) => {
        const progressList = res.Response.ProgressList
        console.log(progressList.lstStudentInfo)
        studentData = progressList.lstStudentInfo[0]
        schoolName = studentData.SchoolName
        creatre()
    })