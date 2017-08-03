import { observable, computed, action } from 'mobx';

class Counter {
  @observable count;

  constructor() {
    this.count = 0;
  }

  @computed get isOdd() {
    return this.count % 2 === 1;
  }

  @action('increment')
  increment = () => {
    this.count++;
  };

  @action('decrement')
  decrement = () => {
    this.count--;
  };
}

const counter = new Counter();
export default counter;
export { Counter };