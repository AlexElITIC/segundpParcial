import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    createBook(){
    this.store.createRecord('music_book',{title: this.get('title'), price:this.get('price'), img_url:this.get('url')}).save().then(()=>{this.set('title',''), this.set('price',''), this.set('url','')})
  },
  updateBook(book){
    book.save();
  },
  deleteBook(book){
    book.destroyRecord();
  }
  }
});
