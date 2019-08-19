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

function tempRange(){
  var States2 = {'Alabama':63,'Alaska':26,'Arizona':60,'Arkansas':60,'California':59,'Colorado':45,'Conneticut':49,
  'Deleware':55,'Florida':71,'Georgia':64,'Hawaii':70,'Idaho':44,'Illinois':52,'Indiana':52,'Iowa':49,'Kansas':54,
  'Kentucky':56,'Louisiana':66,'Maine':41,'Maryland':54,'Massachusetts':48,'Michigan':44,'Minnesota':41,'Mississippi':63,
  'Missouri':54,'Montana':43,'Nebraksa':49,'Nevada':50,'New Hampshire':44,'New Jersey':53,'New Mexico':53,'New York':45,
  'North Carolina':59,'North Dakota':40,'Ohio':51,'Oklahoma':60,'Oregon':48,'Pennslyvania':50,'Rhode Island':51,
  'South Carolina':62,'South Dakota':45,'Tennessee':58,'Texas':65,'Utah':49,'Vermont':43,'Virginia':55,'Washington':48,
  'West Virginia':52,'Wisconsin':43,'Wyoming':42};

  var correctState = document.getElementById('state').innerHTML

  if (parseFloat(document.getElementById('userInput').value) >= States2[correctState] - 1 && parseFloat(document.getElementById('userInput').value) <= States2[correctState] +1) {
    alert("Not quite, but close enough!");
  } else {
    alert("Not even close, sorry -\('^')?/-")
  }

}
