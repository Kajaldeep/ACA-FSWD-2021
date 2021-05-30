function get(){
async function get_token() {
  const response = await fetch("http://localhost:12345/get_token");
  const token = await response.json();
  console.log(token);
  document.getElementById("demo1").innerHTML = "Your generated token is: ";
  document.getElementById("tokenid").textContent = token.token;
}

get_token().catch((err) => {
  console.log("error");
});
}

var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var data_username = document.getElementById("username").value;
  var data_data = document.getElementById("data").value;
  var data_token = document.getElementById("token").value;

  let entry = {
    username: data_username,
    data: data_data,
    token: data_token,
  };

  fetch("http://localhost:12345/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  })
  .then((response) => response.json())
  .then((json) => console.log(json));

  if(document.getElementById("tokenid").textContent == document.getElementById("token").value){
    var results = document.getElementById("results")
    results.innerHTML = "Your data has been saved successfully!"}
    else{
      window.alert("Get token from Get Token");}
  })


  var form1 = document.getElementById("form1");
  form1.addEventListener("submit", function (e) {
    e.preventDefault();
  
    var data_token1 = document.getElementById("token1").value;
    fetch("http://localhost:12345/get_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: data_token1,
      })
    })
    .then((response) => response.json())
    .then(data => {
      output = JSON.parse(JSON.stringify(data));
      console.log(data)});

    var results1 = document.getElementById("results1")
    results1.innerHTML = "For token " + data_token1 + " username is " + (output.username) + " and saved data is " + (output.data) + "."
  })
 
  function get_data(){
    document.getElementById("form1").style.display = "block";
  }
  function register(){
    document.getElementById("form").style.display = "block";
  }
  