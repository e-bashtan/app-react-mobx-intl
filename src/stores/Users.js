import { observable, computed, action } from 'mobx';

class Users {
  @observable list;

  constructor() {
    this.list = [];
  }

  @computed get count() {
    return this.list.length;
  }

  @computed get data() {
    return this.list.map(user => ({
      ...user,
      age: computed(() => (new Date()).getUTCFullYear() - user.dateOfBirth.getUTCFullYear())
    }))
  }

  @action('add user')
  addUser = ({name, dateOfBirth}) => {
    this.list.push(new User({name, dateOfBirth}))
  }
}

class User{
  constructor({name, dateOfBirth}) {
    this.id = Math.random();
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
}

const users = new Users();
export default users;
export { Users };