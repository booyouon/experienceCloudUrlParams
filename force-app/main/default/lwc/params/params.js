
import { LightningElement, track } from 'lwc';

export default class Params extends LightningElement {
  @track paramsId
  @track paramsEmail

  parameters = {};

  connectedCallback() {
    this.parameters = this.getQueryParameters();
    console.log(this.parameters);
    this.paramsEmail = this.parameters.email;
    this.paramsId = this.parameters.id;
  }

  getQueryParameters() {
    var params = {};
    var search = location.search.substring(1);

    if (search) {
        params = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', (key, value) => {
            return key === "" ? value : decodeURIComponent(value)
        });
    }
    return params;
  }
}
