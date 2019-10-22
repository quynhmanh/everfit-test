import { decorate, observable } from "mobx";
import moment from 'moment';

class Todo {
    id = Math.random()
    title = ""
    finished = false
    calendarMode = 1
    offsetDays = moment().day() - 1
    nextWeek = () => {
        // console.log('asd');
        // if (this.calendarMode === 1) {
        //     console.log('asd1');
        //     // this.startDate = observable(this.startDate.subtract(7, "days"));
        //     this.startDate.subtract(7, "days");
        //     console.log('this.startDate ', this.startDate);
        // }
        this.offsetDays += this.calendarMode * 7;
    }
    previousWeek = () => {
        this.offsetDays -= this.calendarMode * 7;
    }
}

decorate(Todo, {
    title: observable,
    finished: observable,
    calendarMode: observable,
    startDate: observable,
    offsetDays: observable,
})

var todo = new Todo();

export default todo;