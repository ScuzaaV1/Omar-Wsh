function myFunctionone() {
    let person = prompt("Please enter your name", "Mohamed Amin Boujelbena");
    if (person != null) {
      document.getElementById("hello").innerHTML =
      "Hello " + person + "! How are you today?  I Hope You Are Fine";
    }
  }



  function myFunction() {
    let text;
    let favObject = prompt("What's your favorite Object?", "Exemple");
    switch(favObject) {
      case "coding":
        text = "Excellent choice. Coding is good for your Brain.";
        break;
      case "design":
        text = "Design is my favorite too!";
        break;
      case "gaming":
        text = "Really? Are You Sure The Gaming Is Your Favorite?";
        break;
      default:
        text = "I have never heard of that one..";
    }
    document.getElementById("demo").innerHTML = text;
  }

  function myFunctiona(){
    alert("Thank You For Sub !");
  }

  function myFunctionb(){
    alert("My Phone Number : +216 28 777 139");
  }