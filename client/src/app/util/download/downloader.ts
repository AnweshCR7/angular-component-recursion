import {FormBuilder} from './form-builder';

export class Downloader  {
    public constructor() {
    }

    public download(data: any): void {
        const formBuilder = new FormBuilder();
        const form = formBuilder.getFormElement().appendTo('body');
        formBuilder.setHiddenFields(data);
        form.submit().remove();
    }

}