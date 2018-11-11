// Initialize Firebase
var config = {
    apiKey: "AIzaSyC6uBZpV__Af_W0IFWTABlywRA0vcLfEXA",
    authDomain: "train-scheduler-1b41f.firebaseapp.com",
    databaseURL: "https://train-scheduler-1b41f.firebaseio.com",
    projectId: "train-scheduler-1b41f",
    storageBucket: "train-scheduler-1b41f.appspot.com",
    messagingSenderId: "902293234787"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var databaseRef= database.ref("trains");

$("#add-train-btn").on("click", function(){
   
   event.preventDefault();

    var trainName = $("#name").val().trim();
    var destination =$("#destination").val().trim();
    var firstTrain = $("#first-train").val().trim();
    var tFrequency = $("#frequency").val().trim();

    debugger;
    databaseRef.push({
      name: Name,
      city: destination,
      rate: tFrequency,
      arrival: nextTrain,
      minutes: timeApart,
    
    });
    return false;
  });


      databaseRef.on("child_added", function(childSnapshot) {
      console.log(childSnapshot);
      var nameTrain = childSnapshot.val().name;
      var trainDestination = childSnapshot.val().destination;
      var firstTrain = childSnapshot.val().firstTime;
      var tFrequency = childSnapshot.val().frequency;

    var firstTime = moment(firstTrain, "hh:mm").subtract(1, "years").toString();
     console.log(firstTime);

    var currentTime = moment().format();

    var diffTime = moment().diff(moment(firstTime), "minutes");

    var tRemainder = diffTime % tFrequency;


    var timeApart = tFrequency - tRemainder;
    
  
    var nextTrain = moment().add(timeApart, "minutes");
    nextTrain=moment(nextTrain).format("hh:mm");
   
});


$("row").append("<tr>" +
"<td>" + nameTrain + "</td><td>" + trainDestination + "</td><td>" + tFrequency +
"</td><td>" + nextArrival + "</td><td>" + nextTrain + "</td></tr>");
 });


    
