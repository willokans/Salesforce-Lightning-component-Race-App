({
	loadOptions : function(component) {
        var types = [{class: "optionClass", label: "5k", value: "5k"},
                    {class: "optionClass", label: "10k", value: "10k"},
                    {class: "optionClass", label: "Half-Marathon", value: "Half-Marathon"}];

        component.find("Type").set("v.options", types);
	}
})