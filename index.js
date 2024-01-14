$(document).ready(function () {
  const tabClass = '.tab';
  const indexBtnClass = '.index-btn';
  const indexNextBtnClass = 'index-btn--next';
  const displayFlex = 'flex';
  const displayNone = 'none';

  updateQuestionToShow($(tabClass), $('#tab-1'));

  const btns = $(indexBtnClass);
  btns.click(function () {
    handleButtonClick($(this));
  });

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
    updateQuestionToShow(
      $(`#tab-${currentQuestion}`),
      $(`#tab-${showQuestion}`),
    );
  }

  function updateQuestionToShow(questionsToHide, questionToShow) {
    questionsToHide.css('display', displayNone);
    questionToShow.css('display', displayFlex);
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
});
