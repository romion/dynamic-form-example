import { QuestionBase } from './question-base';

export class MultipleSelectQuestion extends QuestionBase<string> {
  controlType = 'multiple-select';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
