// Get questions from

// Gel local questions

import baseQuestions from '@/questions/BaseQuestions.json';

export function localQuestions() {
  return baseQuestions;
}

// Get locally stored questios

export function storedQuestions() {
  console.log('Locally stored questions');
}

// Get online questions

export function onlineQuestions() {
  console.log('Online questions');
}
