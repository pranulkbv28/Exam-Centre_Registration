let students = [];
let cities = ["Bangalore", "Chennai", "Mumbai", "Delhi", "Kolkata"];
let stuName = document.getElementById("stuName");
let stuEmail = document.getElementById("stuEmail");

function addDetails() {
  let student = {
    name: stuName.value,
    email: stuEmail.value,
    center: cities[Math.floor(Math.random() * 5)],
  };

  let studentExists = students.filter((student) => {
    return student.email == stuEmail.value;
  });
  if (studentExists.length == 0) {
    students.push(student);
    displayStudents();
  } else {
    alert("User Already Exists!");
  }

  console.log(studentExists);
  console.log(students);
  stuName.value = "";
  stuEmail.value = "";
}

function displayStudents() {
  let inpCont = document.getElementById("inpCont");
  inpCont.innerHTML = " ";
  students.map((student) => {
    let inpDiv = document.createElement("div");
    inpDiv.classList.add("inputs");
    let nameEle = document.createElement("p");
    nameEle.classList.add("inpName");
    nameEle.innerText = student.name;
    let emailEle = document.createElement("p");
    emailEle.classList.add("inpEmail");
    emailEle.innerText = student.email;
    let cityEle = document.createElement("p");
    cityEle.classList.add("randCity");
    cityEle.innerText = student.center;

    inpCont.appendChild(inpDiv);
    inpDiv.appendChild(nameEle);
    inpDiv.appendChild(emailEle);
    inpDiv.appendChild(cityEle);
  });
}
