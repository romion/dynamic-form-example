import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../dynamic-form/question-types/question-dropdown';
import { QuestionBase } from '../dynamic-form/question-types/question-base';
import { TextboxQuestion } from '../dynamic-form/question-types/question-textbox';
import { MultipleSelectQuestion } from '../dynamic-form/question-types/question-multiple-select';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    const questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 4
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 2
      }),

      new MultipleSelectQuestion({
        key: 'cars',
        label: 'Cars',
        options: [
          {key: 'audi',  value: 'Audi'},
          {key: 'nissan',  value: 'Nissan'},
          {key: 'hundai',   value: 'Hundai'}
        ],
        order: 4
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        placeholder: 'aaa@bbb.ccc',
        order: 3
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
