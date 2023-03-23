import React,{Component} from "react";
class MyCompo extends Component {
    state = {
        players :[
            {name:"Williams",answered:34,correct:26},
            {name:"George",answered:24,correct:21},
            {name:"Katherine",answered:34,correct:21},
            {name:"Timothy",answered:45,correct:36},
            {name:"Sophia",answered:22,correct:19},
            
        ],
        correctScore:2,
        incorrectScore:-1,
        
    };
    
    sortPlayers=(a,b)=>{
        let{correctScore,incorrectScore}=this.state;
        let x = a.correct*correctScore+(a.answered-a.correct)*incorrectScore;
        let y = b.correct*correctScore+(b.answered-b.correct)*incorrectScore;
        return y-x;
    }
    totalQns = () =>{
        const {players} = this.state;

        return players.reduce((a,c)=>a+c.answered,0 )
    }
    totalCorrect = () =>{
        const {players} = this.state;

        return players.reduce((a,c)=>a+c.correct,0 )
    }

    render(){
        const {players,correctScore,incorrectScore} = this.state;
        const players1 =[...players];
        players1.sort(this.sortPlayers)
        let totalQnsAsked = this.totalQns();
        let totalCorrectAns = this.totalCorrect();
        return (
            <div className="container">
                <div className="row bg-warning">
                {players.map(st=>{
                    let {name,answered,correct} = st
                return (
                 
                    <div className="col-4 border">
                        Name : {name} <br />
                        answered : {answered} <br />
                        correct : {correct} <br />
                        Score : {correct*correctScore+(answered-correct)*incorrectScore}
                    </div>
                
                
                )
    })} 
    </div>        

              <div className="row bg-light">
                <div className="col-6 border">
                    <h4>Leaderboard</h4>
                    1. {players1[0].name} <br />
                    2. {players1[1].name} <br />
                    2. {players1[2].name} <br />

                </div>
                <div className="col-6 border">
                    <h4>Statistics</h4>
                    Total Questions : {totalQnsAsked}<br />
                    Correct Answers : {totalCorrectAns} <br />
                    Incorrect Answers :{totalQnsAsked-totalCorrectAns} <br />
                </div>
              </div>
            </div>
        )
    }
}
export default MyCompo;


// Components

// Components let you split the UI into independent, reusable pieces; and 
// think about each piece in isolation.

// Components make the code modular, easier to manage and understand and 
// re-usable.

// Component has a render() method, which renders a React element into the
//  DOM

// JSX 

// JSX or javascript XML is a syntax extention to javascript

// It has HTML like syntax and is easy to read 

// JSX produces React Elements

// example 
// const element = <h1>Hello, world!</h1>;

// React.Fragment

// A common pattern in React is for a

// component to return multiple elements JSX expression must have a single 
// parent

// React.Fragment is used to group multiple children in a single parent 
// without adding extra nodes to the DOM



