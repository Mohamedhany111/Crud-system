let name_user = document.getElementById("name_user");
let email_user = document.getElementById("email_user");
let age_user = document.getElementById("age_user");
let country_user = document.getElementById("country_user");
let add_btn = document.getElementById("add_btn");
let clear_btn = document.getElementById("clear_btn");
let arr; 
let current = 0;
if (localStorage.getItem("myinfo") == null){
    arr =[];
}
else{
arr =  JSON.parse(localStorage.getItem("myinfo")) ;
display();
}
add_btn.addEventListener("click", () => {
  if(add_btn.innerHTML == "add"){
    if(name_user.value != "" && email_user.value != "" && age_user.value != ""&& country_user.value != ""){
      add()
      display();
      clear ()
      
    }
  }else{
    saveUpdate()
  }
})
function add(){
    let infoUser= {
            name:name_user.value,
            email:email_user.value,
            age:age_user.value,
            country:country_user.value,
    }
    arr.push(infoUser);
    localStorage.setItem("myinfo", JSON.stringify(arr));


}
function display(){
    let info =" ";
    for(let i =0 ; i<arr.length ; i++){
        info +=`
        <tr>
            <td>${arr[i].name}</td>
            <td>${arr[i].email}</td>
            <td>${arr[i].age}</td>
            <td>${arr[i].country}</td>
            <td><button onclick="updateUser(${i})" class="btn btn-danger " id="update">update</button></td>
            <td><button onclick="deleteUser(${i})" class="btn btn-danger " id="delete">delete</button></td>
        </tr>`
    }
    document.getElementById("tbody").innerHTML = info;
}
function clear (){
name_user.value = ""
email_user.value=""
age_user.value=""
country_user.value=""
}
function search(re){
  let searchUser ="";
for(let i=0 ; i<arr.length ; i++){
  if(arr[i].name.includes(re) == true){
    searchUser+=` 
    <tr>
    <td>${arr[i].name}</td>
    <td>${arr[i].email}</td>
    <td>${arr[i].age}</td>
    <td>${arr[i].country}</td>
</tr>` 
  }
}
document.getElementById("tbody").innerHTML =searchUser;
}
function deleteUser(index){
  arr.splice(index, 1);
  localStorage.setItem("myinfo", JSON.stringify(arr));
  display();
}
clear_btn.addEventListener("click", () => {
  clear ()
})
function updateUser(index){

  current = index;
  name_user.value= arr[index].name
  email_user.value=arr[index].email
  age_user.value=arr[index].age
  country_user.value=arr[index].country
  add_btn.innerHTML ="update"
}
function saveUpdate(){
  let infoUser= {
    name:name_user.value,
    email:email_user.value,
    age:age_user.value,
    country:country_user.value,
} 
arr[current] = infoUser
localStorage.setItem("myinfo", JSON.stringify(arr))
display()
clear ()
add_btn.innerHTML ="add"
}