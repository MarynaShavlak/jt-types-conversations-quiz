export const QUIZ__QUESTIONS = {
  question1: {
    text: 'What will be displayed in the console?',
    code: '0 || "0" && {}',
    answer: "{}"
  },
  question2: {
    text: 'What will be displayed in the console?',
    code: '!+[]+[]+![]',
    answer: '"truefalse"'
  },

  question3: {
    text: 'What expressions(choose all) will show true?',
    answer: ['null == null', 'null == undefined', '[1] > null', "['x'] == 'x'", 'null >= 0' ]
  },
  question4: {
    text: 'What expressions(choose all) will show false?',
    answer: ['Boolean(NaN)', "false == 'false'", '[1,2,3] == [1,2,3]', "null == ''"]
  },
  question5: {
    text: 'What will be result of code below?',
    code: `alert(alert(null) && alert(3) || alert(+undefined && !1) &&
  alert((new Date(!0)).toDateString()) || 4)`,
  answer: 'null -> NaN -> 4',
  },
  question6: {
    text: 'What will be the result of expression?',
    code: '+"12345" + null',
    answer: 12345,
  },
  question7: {
    text: 'What will be the result of expression?',
    code: '"b" + "a" + +"a" + "a"',
    answer: '"baNaNa"',
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
