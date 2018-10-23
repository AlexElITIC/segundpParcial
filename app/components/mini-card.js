import Component from '@ember/component';

export default Component.extend({
  actions:{
    update(){
      this.onUpdate();
    },
    delete(){
      this.onDelete();
    }
  }
});
