// @flow

import { observable, extendObservable, action, computed } from 'mobx';
import moment from 'moment';
import extend from 'lodash/extend';
import last from 'lodash/last';
import get from 'lodash/get';

import API from 'Utils/api';
import Person from './Person';

class Match {
  id: string;
  store: Object;

  @observable is_fetched: boolean = false;
  @observable person: Object = {};
  @observable messages: [] = [];

  @action async setMatch(match: Object) {
    extend(this, match);

    this.person = new Person(null, match.person);
  }

  @action create() {

  }

  @computed get lastMessage(): Object {
    return last(this.messages) || {}
  }
}

export default Match;
