let students = [
 {id: "000001"  , lastName: "Tamayo"        , name: "Rodolfo" , grade: 6  , group: "A"  , birthDay:"07-23-1991", ppURL:null},
 {id: "000002"  , lastName: "Tamayo"        , name: "Ivan"    , grade: 4  , group: "A"  , birthDay:"02-12-1993", ppURL:null},
 {id: "000003"  , lastName: "Constructor"   , name: "Bob"     , grade: 6  , group: "A"  , birthDay:"09-13-1991", ppURL:null},
 {id: "000004"  , lastName: "Esponja"       , name: "Bob"     , grade: 1  , group: "A"  , birthDay:"02-03-1996", ppURL:null},
 {id: "000005"  , lastName: "Delocho"       , name: "Chavo"   , grade: 3  , group: "A"  , birthDay:"12-18-1995", ppURL:null},
 {id: "000006"  , lastName: "Guy"           , name: "Doom"    , grade: 5  , group: "A"  , birthDay:"10-30-1998", ppURL:null},
 {id: "000007"  , lastName: "The Grey"      , name: "Gandalf" , grade: 6  , group: "A"  , birthDay:"11-31-1998", ppURL:null},
 {id: "000008"  , lastName: "Gamgee"        , name: "Samwise" , grade: 4  , group: "A"  , birthDay:"04-20-1995", ppURL:null},
 {id: "000009"  , lastName: "Wayne"         , name: "Bruce"   , grade: 4  , group: "A"  , birthDay:"08-29-1992", ppURL:null},
 {id: "000010"  , lastName: "Explorer"      , name: "Dora"    , grade: 1  , group: "A"  , birthDay:"04-08-1991", ppURL:null},
 {id: "000011"  , lastName: "Explorer"      , name: "Diego"   , grade: 1  , group: "A"  , birthDay:"05-07-1991", ppURL:null},
 {id: "000012"  , lastName: "Perez"         , name: "Rodolfo" , grade: 2  , group: "A"  , birthDay:"03-15-1991", ppURL:null},
 {id: "000013"  , lastName: "Tamayo"        , name: "Juan"    , grade: 4  , group: "A"  , birthDay:"06-22-1991", ppURL:null},
 {id: "000014"  , lastName: "Smith"         , name: "Rodolfo" , grade: 2  , group: "A"  , birthDay:"07-09-1991", ppURL:null},
 {id: "000015"  , lastName: "Pato"          , name: "Hugo"    , grade: 5  , group: "A"  , birthDay:"11-11-1991", ppURL:null},
 {id: "000016"  , lastName: "Pato"          , name: "Paco"    , grade: 1  , group: "A"  , birthDay:"12-12-1991", ppURL:null},
 {id: "000017"  , lastName: "TMNT"          , name: "Leo"     , grade: 2  , group: "A"  , birthDay:"01-09-1991", ppURL:null},
 {id: "000018"  , lastName: "TMNT"          , name: "Mich"    , grade: 4  , group: "A"  , birthDay:"03-30-1991", ppURL:null},
 {id: "000019"  , lastName: "Perez"         , name: "Rodolfo" , grade: 5  , group: "A"  , birthDay:"02-16-1991", ppURL:null},
 {id: "000020"  , lastName: "TMNT"          , name: "Rafa"    , grade: 5  , group: "A"  , birthDay:"06-05-1991", ppURL:null},
 {id: "000021"  , lastName: "TMNT"          , name: "Dona"    , grade: 2  , group: "A"  , birthDay:"08-01-1991", ppURL:null},
 {id: "000022"  , lastName: "Smith"         , name: "Juan"    , grade: 6  , group: "A"  , birthDay:"05-07-1991", ppURL:null},
 {id: "000023"  , lastName: "Pato"          , name: "Luis"    , grade: 6  , group: "A"  , birthDay:"09-27-1991", ppURL:null},
 
];

class Student {
    constructor(id, lastName, name, grade, group, birthDay, ppURL){
        this.id = id;
        this.lastName = lastName;
        this.name = name;
        this.grade = grade;
        this.group = group;
        this.birthDay = birthDay;
        this.ppURL = ppURL;
        //this.age = getAge(this.birthDay);
    }


}


document.querySelector("#addStudent").addEventListener("click", () =>{
    const newStudentInputFields = document.querySelectorAll(".inputInfo, .newStudentBtn");
    const selectedStudentTags = document.querySelectorAll(".selectedStudentTag");

    for (const selectedStudentTag of selectedStudentTags){
        selectedStudentTag.style.display = 'none';
    }

    for (const dissapear of newStudentInputFields){
        dissapear.style.display = 'block';
    }

    document.querySelector("#editStudent").style.display = "none";
    document.querySelector("#newID").setAttribute('value',getNewIDnumber());
    document.querySelector("#newID").readOnly = true;

    function getNewIDnumber(){
        //const max = data.reduce()
        const max = Math.max(...students.map(o => parseInt(o.id))) + 1;
        const newID = "0".repeat(6-max.toString().length) + max.toString();
        return newID;
    }
});

document.querySelector("#cancelAddStudent").addEventListener("click", () =>{
    const newStudentInputFieldsAndBtns = document.querySelectorAll(".inputInfo, .newStudentBtn");
    const newStudentInputFields = document.querySelectorAll(".inputInfo");

    for (const clr of newStudentInputFields){
        //this is clearing the value from the inputfield but not letting to appear again (ID)
        clr.value = "";
    }

    for (const dissapear of newStudentInputFieldsAndBtns){
        dissapear.style.display = 'none';
    }


    document.querySelector("#editStudent").style.display = "block";
});

document.querySelector("#saveAddStudent").addEventListener("click", () =>{
    const checkInputs = document.querySelectorAll(".inputInfo");
    const filledInputs = Array.from(checkInputs).filter(input => (input.value != ""));
    const newStudentInputFieldsAndBtns = document.querySelectorAll(".inputInfo, .newStudentBtn");
    const toBeID = document.querySelector("#newID").value;

    console.log(filledInputs);

    if (filledInputs.length < 6){        
        confirm("Please enter valid info on all fields");
    }else{
        let student = new Student(checkInputs[5].value, checkInputs[0].value, checkInputs[1].value, checkInputs[2].value, checkInputs[3].value, checkInputs[4].value, "" ); //preguntar si simplemente puedo alimentar el constructor con el arreglo
        students.push(student);
    }

    document.querySelector("#editStudent").style.display = "block";
    for (const dissapear of newStudentInputFieldsAndBtns){
        dissapear.style.display = 'none';
    }
    
    for (const clr of checkInputs){
        //this is clearing the value from the inputfield but not letting to appear again (ID)
        clr.value = "";
    }

    selectStudent(toBeID);
});

document.querySelector("#searchStudent").addEventListener("click", () =>{
    
    const id = document.querySelector("#siA").value;
    const lastName = document.querySelector("#siB").value;
    const name = document.querySelector("#siC").value;
    const grade = document.querySelector("#siD").value;
    const group = document.querySelector("#siE").value;
        

    if ((id.length>2)||(lastName.length>2)||(name.length>2)||(grade.length>0)||(group.length>0)){
        var filteredArray = students.filter(o => o.id.includes(id) && o.lastName.includes(lastName) && o.name.includes(name) && o.grade.toString().includes(grade.toString()) && o.group.includes(group));
        filteredArray.sort((a, b) => (a.lastName > b.lastName) ? 1 : (a.lastName === b.lastName) ? ((a.name > b.name) ? 1 : -1) : -1 );
        
        
        //remove all rows before showing new results
        const existingRows = document.querySelectorAll("#searchResultsTableBody tr");
        
        for (const rowDlt of existingRows){
            rowDlt.remove();
        }
        
        const table1 = document.querySelector("#searchResultsTableBody");

        filteredArray.forEach(element => {
            //console.log(element);
            var row = table1.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            
            cell1.innerHTML = element.id;
            cell2.innerHTML = element.lastName;
            cell3.innerHTML = element.name;
            cell4.innerHTML = element.grade;
            cell5.innerHTML = element.group;
        });

    } else {
        confirm("Please enter a minimum of 3 characters for ID, Last name or name or enter a grade or group");
    }

    ////////////////////////////need to modify this piece of code to bring the selected row info instead of the last row info.
    var searchTable = document.querySelector("#searchResultsTableBody");

    for (var i=0; i<searchTable.rows.length; i++){
        var currentStudentID = document.querySelector("#searchResultsTableBody").rows[i].cells[0].innerHTML;
        searchTable.rows[i].addEventListener("click", () =>{
            selectStudent(currentStudentID);
        });
    }
    ///////////////////////////
});


document.querySelector("#clearSearchStudentResults").addEventListener("click", () =>{
    const existingRows = document.querySelectorAll("#searchResultsTableBody tr");

    for (const rowDlt of existingRows){
        rowDlt.remove();
    }
});

document.querySelector("#clearInputFields").addEventListener("click", () =>{
        inputFields = document.querySelectorAll(".search-input");

        for (const clr of inputFields){
            clr.value = "";
        }
});






function selectStudent(id){
    const newStudentInputFieldsAndBtns = document.querySelectorAll(".inputInfo");
    const selectedStudentTags = document.querySelectorAll(".selectedStudentTag");

    for (const dissapear of newStudentInputFieldsAndBtns){
        dissapear.style.display = 'none';
    }

    for (const selectedStudentTag of selectedStudentTags){
        selectedStudentTag.style.display = 'inline';
    }

    document.querySelector("#lastNamet").innerHTML = students.filter(o => o.id === id)[0].lastName;
    document.querySelector("#namet").innerHTML = students.filter(o => o.id === id)[0].name;
    document.querySelector("#gradet").innerHTML = students.filter(o => o.id === id)[0].grade;
    document.querySelector("#groupt").innerHTML = students.filter(o => o.id === id)[0].group;
    document.querySelector("#aget").innerHTML = students.filter(o => o.id === id)[0].birthDay;
    document.querySelector("#idt").innerHTML = students.filter(o => o.id === id)[0].id;

}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
