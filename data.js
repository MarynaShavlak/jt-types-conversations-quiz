export const QUIZ__QUESTIONS = {
  question1: "What will be displayed in the console?",
  question2: "What will be displayed in the console?",
  question3: 'What expressions(choose all) will show true?',
  question4: 'What expressions(choose all) will show false?',
  question5: { 
    text: 'What will be result of code below?',
  code: `alert(alert(null) && alert(3) || alert(+undefined && !1) &&
  alert((new Date(!0)).toDateString()) || 4)`

  },
  question6: {
    text:'What will be the result of expression?',
    code: '+"12345" + null'
  },
  question7:  {
    text:'What will be the result of expression?',
    code: '"b" + "a" + +"a" + "a"'
  },
};
export const QUIZ__ANSWER = {
  question1: 'a',
  question2: 'c',
  question3: ['a', 'b', 'd', 'e', 'f'],
  question4: ['a', 'c', 'e', 'f'],
  question5: 'c',
  question6: '12345',
  question7: '"baNaNa"',
};