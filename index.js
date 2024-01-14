$(document).ready(function () {
  const tabClass = '.tab';
  const indexBtnClass = '.index-btn';
  const indexNextBtnClass = 'index-btn--next';

  const QUIZ__ANSWER = {
    question1: 'a',
    question2: 'c',
    question3: [
      'a',
      'b',
      'd',
      'e',
      'f',
    ],
    question4: [
      'a',
      "c",
      'e',
      'f',
    ],
    question5: 'c',
    question6: 12345,
    question7: 'baNaNa',
  };

  const userAnswers = {
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
  };
  updateQuestionToShow($(tabClass), $('#tab-1'));
  setFocusedState();

  const btns = $(indexBtnClass);
  btns.click(function () {
    handleButtonClick($(this));
  });

  $('.submit-btn').click(function (e) {
    e.preventDefault();
    handleFormSubmit();
  });

  function handleFormSubmit() {
    updateTextAnswer(7);
    compareAnswers();
  }

  function compareAnswers() {
    const quizAnswersList = Object.values(QUIZ__ANSWER);
    const userAnswersAList = Object.values(userAnswers);
    quizAnswersList.forEach((quizAnswer, index) => {
      console.log('quizAnswer: ', quizAnswer);
      const userAnswer = userAnswersAList[index];
      console.log('userAnswer: ', userAnswer);
      const isTheSame  = quizAnswer === userAnswer;
      console.log('isTheSame: ', isTheSame);
      const isQuizAnswerArray = Array.isArray(quizAnswer);
      if (isQuizAnswerArray) {
        const isFullAnswer = quizAnswer?.length === userAnswer?.length;
        console.log('isFullAnswer: ', isFullAnswer);
      }
      console.log('__________');
    });
  }

  function setFocusedState() {
    const textInputs = $(':text');
    textInputs.focus(function () {
      $(this).addClass('focused');
    });
    textInputs.blur(function () {
      $(this).removeClass('focused');
    });
  }

  function getTabOrder(tabID) {
    const match = tabID.match(/\d+/);
    return match ? parseInt(match[0]) : null;
  }

  function handleButtonClick(btn) {
    const questionID = btn.closest(tabClass).attr('id');
    const currentQuestion = getTabOrder(questionID);
    const isNextBtn = btn.hasClass(indexNextBtnClass);
    const showQuestion = isNextBtn ? currentQuestion + 1 : currentQuestion - 1;

    updateProgressBar(isNextBtn, currentQuestion, showQuestion);
    updateUserAnswersObj(currentQuestion);
    updateQuestionToShow(
      $(`#tab-${currentQuestion}`),
      $(`#tab-${showQuestion}`),
    );
  }

  function updateQuestionToShow(questionsToHide, questionToShow) {
    questionsToHide.hide();
    questionToShow.show();
  }

  function updateProgressBar(isNextBtn, current, toShow) {
    if (isNextBtn) {
      for (let i = 1; i <= toShow; i++) {
        $(`#step-${i}`).addClass('step--current');
      }
    } else {
      $(`#step-${current}`).removeClass('step--current');
    }
  }

  function updateUserAnswersObj(currentQuestion) {
    const element = $("input[name='question" + currentQuestion + "']").get()[0];
    const typeAttributeValue = $(element).attr('type');
    if (typeAttributeValue === 'checkbox') {
      updateCheckBoxAnswers(currentQuestion);
    } else if (typeAttributeValue === 'radio') {
      updateRadioAnswers(currentQuestion);
    } else {
      updateTextAnswer(currentQuestion);
    }
  }

  function updateRadioAnswers(currentQuestion) {
    const inputSelector =
      "input[type='radio'][name='question" + currentQuestion + "']:checked";
    const radioInput = $(inputSelector);
    const value = radioInput.val();
    const questionKey = 'question' + currentQuestion;
    userAnswers[questionKey] = value;
  }

  function updateCheckBoxAnswers(currentQuestion) {
    const chosenVariants = $(
      "input[type='checkbox'][name='question" + currentQuestion + "']:checked",
    );
    if (chosenVariants.length !== 0) {
      const answers = chosenVariants
        .map(function () {
          return $(this).val();
        })
        .get();
      userAnswers['question' + currentQuestion] = answers;
    }
  }

  function updateTextAnswer(currentQuestion) {
    const inputSelector =
      'input[type="text"][name="question' + currentQuestion + '"]';
    const textInput = $(inputSelector);
    const value = textInput.val();
    const questionKey = 'question' + currentQuestion;
    userAnswers[questionKey] = value;
  }
});
