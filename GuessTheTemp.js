var R = Math.floor(Math.random() * 50);

function getRndmState(){

  var State = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Conneticut","Deleware",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
  "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana",
  "Nebraksa","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota",
  "Ohio","Oklahoma","Oregon","Pennslyvania","Rhode Island","South Carolina","South Dakota","Tennessee",
  "Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]

  alert(State[R])

  document.getElementById('state').innerHTML = State[R];
}

function answerCheck(){
  var States = {'Alabama':62.8,'Alaska':26.2,'Arizona':60.3,'Arkansas':60.4,'California':59.4,'Colorado':45.1,'Conneticut':49,
  'Deleware':55.3,'Florida':70.7,'Georgia':63.5,'Hawaii':70,'Idaho':44.4,'Illinois':51.8,'Indiana':51.7,'Iowa':47.8,'Kansas':54.3,
  'Kentucky':55.6,'Louisiana':66.4,'Maine':41,'Maryland':54.2,'Massachusetts':47.9,'Michigan':44.4,'Minnesota':41.2,'Mississippi':63.4,
  'Missouri':54.4,'Montana':42.7,'Nebraksa':48.8,'Nevada':49.9,'New Hampshire':43.8,'New Jersey':52.7,'New Mexico':53.4,'New York':45.4,
  'North Carolina':59,'North Dakota':40.4,'Ohio':50.7,'Oklahoma':59.6,'Oregon':48.4,'Pennslyvania':50.1,'Rhode Island':50.1,
  'South Carolina':62.4,'South Dakota':45.2,'Tennessee':57.6,'Texas':64.8,'Utah':48.6,'Vermont':42.9,'Virginia':55.1,'Washington':48.3,
  'West Virginia':51.8,'Wisconsin':43.1,'Wyoming':42};

   var correctState = document.getElementById('state').innerHTML
   //alert(correctState);
   //alert(typeof(parseFloat(document.getElementById('userInput').value)));
   //alert(typeof(States[correctState]));
  if (parseFloat(document.getElementById('userInput').value) == States[correctState]) {
    alert("Congrats, You got it right!");
  } else {
    alert("Sorry, wrong answer.");
  }
}
