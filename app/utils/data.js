import {observable, autorun} from 'mobx';

class TodoList{
    constructor(){
        var todos = observable([
            { title: "Spoil tea", completed: true },
            { title: "Make coffee", completed: false }
        ]);
    }



    // @observable todos = [
    //     {
    //         id: 1,
    //         title: "Broad Breakfast",
    //         time: "2018-08-2 22:30",
    //         category: 1,
    //         type: 2
    //     },
    //     {
    //         id: 2,
    //         title: "Preparation for Exam",
    //         time: "2018-08-2 22:30",
    //         category: 2,
    //         type: 3
    //     },
    //     {
    //         id: 3,
    //         title: "Vixtra gaming",
    //         time: "2018-08-2 22:30",
    //         category: 1,
    //         type: 1
    //     }
    // ]


    @observable test=["2","3"]
    addItem(item){
        this.todos.push({
            id:this.todos.length,
            title: item.title,
            time: item.time,
            category: item.category,
            type: item.type
        })
    }
    //
    // removeItem(id){
    //     this.todos = this.todos.filter((item) => {
    //         return item.id !== id
    //     })
    // }
}

const todos =  new TodoList();

export default todos
