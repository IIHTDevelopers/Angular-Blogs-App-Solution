export class Blog {
    id: number;
    title: string;
    content: string;
    author: string;
    date: Date;

    constructor() {
        this.id = 0;
        this.title = '';
        this.content = '';
        this.author = '';
        this.date = new Date();
    }
}
