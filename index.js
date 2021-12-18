console.log("Welcome");


var readlineSync=require('readline-sync');

var score=0;

var userName=readlineSync.question("what is your name?");

function play(question,answer)
{
    var userAnswer=readlineSync.question(question);

    if(userAnswer===answer)
    {
       console.log("right");
       score=score+1;
    }
    else
    {
       console.log("wrong");
       score=score-1;
    }
    console.log("current score:"+score);
    console.log("____");
}

var questions=
[{
  question:"Which  film shot Rajinikanth to stardom",
  answer:"Bairavi"
  },
  {
    question:"In which year did Rajinikanth get the National Award?",answer:"1985"


  

  },
  
  {
     question:"In which year was Rajinikanth Dadasaheb Phalke awarded ?",answer:"2021"
  },
  
 {
     question:"Which film saw Rajinikanth play a triple role? ",answer:"Rana"
  },
  

    {
     question:" Which rajinikanth film won a national award?",answer:"	Nallavanuku Nallavan"
  },
  

 
{
     question:"In which year was Rajinikanth filmfare awarded ",answer:"1985"
  },







  {
     question:" In Which year rajinikanth born ",answer:"	 1950"
  },
  
  
  ];

for(var i=0; i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
 console.log("YAY ! You SCORED :"+score)
