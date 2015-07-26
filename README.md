# jQuery.hsChanged.js
Other jQuery plugins can be used to indicate when a form has been modified, whereas **jQuery.hasChanged** will highlight *which* form fields have been modified by the addition of a CSS class.

## Usage
Simply add a call to `hasChanged` on any jQuery selecter:

```
$(":input").hasChanged();
```

#### Notes on usage
* Although **jQuery.hasChanged** works only on `<input type="checkbox|radio|text">`, `<select>` and `<textarea>` elements, it also fully supports chaining on *all* elements returned by the specified selecter, whether or not **jQuery.hasChanged** is running on them.

## Options
**jQuery.hasChanged** contains several options, as well as permitting only numbers to be specified.
* `cssClass`: a string value denoting the CSS class which should be used to indicate a modified field value. Default: "*has-changed*".
* `dataKey`: **jQuery.hasChanged** stores the original value of each monitored field by using jQuery's [data](https://api.jquery.com/jquery.data/) method. This is a conventional approach to storing a hidden value using a key-value pair. However, in some rare cases the developer may wish to change the key - perhaps this key conflicts with some other JavaScript, or the developer wishes to combine purposes. Default: "*orig-val*".

#### Example
The following snippet demonstrates how to add **jQuery.hasChanged** to all relevant form elements while also specifying that the CSS class "*modified*" should be used to indicate a modified field value:

```
$(":input").hasChanged({
	cssClass: "modified"
});
```

*In case it's new to you, the `[:input]`(https://api.jquery.com/input-selector/)* is a standard jQuery selecter.*

## Copyright and Licensing
Copyright © 2015 Andrew Jameson, released under the [MIT license](https://raw.githubusercontent.com/awj100/jQuery.hasChanged.js/master/LICENSE).
