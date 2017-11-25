// export class Filemodel {
//     constructor(
//         public filename?: string,
//         public filetype?: string
//     ) { }
// }
export class Filemodel {
    public filename: string;
    public filetype: string;

    public setfilename(name) {
        this.filename = name;
    }

    public setfiletype(type) {
        this.filetype = type;
    }
    public getfilename() {
        return this.filename;
    }

    public getfiletype() {
        return this.filetype;
    }
}
