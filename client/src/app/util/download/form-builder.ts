import {extend} from "jquery";

export class FormBuilder {
    public getFormElement() {
        const url = 'api/url/'; //url goes here
        return $('<form id="import-form" action="' + url + '" method="post" enctype="application/x-www-form-urlencoded" target="_blank">'
        	+ '<input name="data" id="data" type="hidden">'
        	+ '</form>');
    }

    public setHiddenFields(data: any) {
		var importForm = $(document).find("#import-form");
	    $("#import-form input[name='data']").val(JSON.stringify(data));
    }

}