/* eslint-disable camelcase */
export interface ITodo {
    id: string;
    content: string;
    finished: boolean;
    ctime: number;
    mtime: number;
}

export class Todo implements ITodo {
    id: string;
    content: string;
    finished: boolean;
    ctime: number;
    mtime: number;
    el: HTMLElement;

    constructor(obj: ITodo){
        this.id = obj.id;
        this.finished = obj.finished;
        this.content = obj.content;
        this.ctime = obj.ctime;
        this.mtime = obj.mtime;
    }

    toJSON() {
        return {
            id: this.id,
            content: this.content,
            finished: this.finished,
            ctime: this.ctime,
            mtime: this.mtime
        }
    }
}
