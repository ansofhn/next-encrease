import { makeAutoObservable } from "mobx";

export class TestStore {
  value;

  constructor() {
    makeAutoObservable(this);
  }

  changeValue(newValue) {
    this.value = newValue;
  }
}
