const qBank = [
    {
      question:"What is a virus?",
      answers: ["A microscopic, single-celled organism",
               " A sub-microscopic infectious agent that replicates only inside the living cells of an organism",
               "A multicellular organism with chlorophyll as its primary photosynthetic pigment"],
      correct: "Richard Branson",
      questionId: "01"
    },
    {
      question:"What is the official name of the virus as designated by the World Health Organization (WHO)?",
      answers: ["Sars-CoV-2","Covid-19","Wuhan flu"],
      correct: "Sars-CoV-2",
      questionId: "02"
    },
    {
      question:"What does the 19 in Covid-19 stand for?",
      answers: ["It refers to the 19 molecules that make up the virus",
                "It is the 19th coronavirus identified since the WHO began naming them"
                ,"It is the year the virus was first encountered: 2019"],
      correct: "It is the year the virus was first encountered: 2019",
      questionId: "03"
    },
    {
      question:"About what percentage of infected people recover without needing hospital treatment according to the World Health Organisation website?",
      answers: ["60%","70%","80%","90%"],
      correct: "80%",
      questionId: "04"
    },
    {
      question:"Which of these is NOT listed by the WHO as a symptom of coronavirus?",
      answers: ["Fever","Dry cough","Blurred vision","Nasal congestion"],
      correct: "Blurred vision",
      questionId:"05"
    },
    {
      question:"What is more effective at removing the coronavirus from your hands",
      answers: ["Alcohol-based hand sanitiser","Soap and water"],
      correct: "Soap and water",
      questionId:"06"
    },
    {
      question:"How big is the coronavirus?",
      answers: ["8 billionths of a metre in diameter","80 billionths of a metre in diameter","800 billionths of a metre in diameter"],
      correct: "80 billionths of a metre in diameter",
      questionId:"07"
    },
    {
      question:"In which country covid Born?",
      answers: ["India","Pakistan","China","America"],
      correct: "China",
      questionId:"08"
    },
    {
      question:"What does the virus attach itself to when it enters the human body?",
      answers: ["Antigens","Red blood cells","Ace-2 receptors in the lining of the airways"],
      correct: "Ace-2 receptors in the lining of the airways",
      questionId:"09"
    },
    {
      question:"Which organ in the body does this coronavirus primarily attack?",
      answers: ["Lungs"," Liver","Heart"],
      correct: "Lungs",
      questionId:"10"
    },
]
  export default (n = 5) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
  