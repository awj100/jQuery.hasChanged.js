(function($) {

    $.fn.hasChanged = function(o) {

        o = $.extend({
            cssClass: "has-changed",
            dataKey: "orig-val"
        }, o);

        // this is the function which adds or removes the optionally-specified CSS class
        function addOrRemoveClass(elmnt, newVal) {
			var oldVal = elmnt.data(o.dataKey),
				funcName = oldVal !== newVal
								? "addClass"
								: "removeClass";
            elmnt[funcName](o.cssClass);
        }

        return this.filter("input:checkbox, input:radio, input:text, select, textarea").each(function() {

            var elmnt = $(this),
				tagName = elmnt.get(0).nodeName.toLowerCase(),
				tta = elmnt.attr("type");

            elmnt.off(".hasChanged");

            switch (tagName) {
				case "input":
					switch (tta) {
						case "checkbox":
							elmnt.data(o.dataKey, elmnt.is(":checked"));
							
							elmnt.on("change.hasChanged", function () {
								addOrRemoveClass(elmnt, elmnt.is(":checked"));
							});
							break;

						case "radio":
							elmnt.data(o.dataKey, elmnt.is(":checked"));
							
							elmnt.on("change.hasChanged", function () {									
								// consider all other radio buttons with the same 'name' attribute
								$("input:radio[name='" + elmnt.attr("name") + "']").each(function() {
									var elmntRadio = $(this);
									addOrRemoveClass(elmntRadio, elmntRadio.is(":checked"));
								});
							});
							break;

						case "text":
							elmnt.data(o.dataKey, elmnt.val());
							
							elmnt.on("input.hasChanged propertychange", function () {
								addOrRemoveClass(elmnt, elmnt.val());
							});
							break;
					}
					break;

				case "textarea":
					elmnt.data(o.dataKey, elmnt.val());

					elmnt.on("input.hasChanged propertychange", function () {
						addOrRemoveClass(elmnt, elmnt.val());
					});
					break;

				case "select":
					elmnt.data(o.dataKey, $("option:selected", elmnt).val());

					elmnt.on("change.hasChanged", function () {
						addOrRemoveClass(elmnt, $("option:selected", elmnt).val());
					});
					break;
            }

            return this;
        });
    };

})(jQuery);
