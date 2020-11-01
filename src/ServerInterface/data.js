let q1 = {picture: "cherryblossom.png", title: "Which word matches this picture?",
    choices: ["cherry blossom", "daisy", "hydranga"], correct: "cherry blossom"};
let q2 = {picture: "daffodil.png", title: "Which word matches this picture?",
    choices: ["cherry blossom", "daffodil", "hydranga"], correct: "daffodil"};
let q3 = {picture: "daisy.jpg", title: "Which word matches this picture?",
    choices: ["daisy", "tulip", "rose"], correct: "daisy"};
let q4 = {picture: "lily.jpg", title: "Which word matches this picture?",
    choices: ["sunflower", "cherry blossom", "lily"], correct: "lily"};
let q5 = {picture: "rose.png", title: "Which word matches this picture?",
    choices: ["rose", "daisy", "hydranga"], correct: "rose"};
let q6 = {picture: "waterlily.png", title: "Which word matches this picture?",
    choices: ["sunflower", "waterlily", "cherry blossom"], correct: "waterlily"};
let q7 = {picture: "tulip.png", title: "Which word matches this picture?",
    choices: ["sunflower", "waterlily", "tulip"], correct: "tulip"};
let q8 = {picture: "sunflower.png", title: "Which word matches this picture?",
    choices: ["rose", "sunflower", "daffodil"], correct: "sunflower"};

let quiz1 = {id: 1, title: "Quiz 1", picture: "cherryblossom.png",
    questions: [q1, q2, q3, q4, q5, q6]}
let quiz2 = {id: 2, title: "Quiz 2", picture: "tulip.png",
    questions: [q7, q8, q3, q1, q6, q4]}
let quiz3 = {id: 3, title: "Quiz 3", picture: "lily.jpg",
    questions: [q3, q1, q8, q5, q7, q6]}
let quizzes = [quiz1, quiz2, quiz3];
export default quizzes;