import $ from 'jQuery';

export default class PeopleService {

    constructor() {
        this.url = "https://randomuser.me/api/?results=10";
    }

    getPeople(){
        return $.get(this.url);
    }

    getPerson(id){
        return $.get(this.url+id);
    }

}
