# FormUI

> FormUI is a ultra light librairy to check the editable content of your user before upload it.

# Pre-requires

Just add once of the follows lines on bottom of the body balise :

Github CDN

```html
<script src= "https://raw.githubusercontent.com/rltp/FormUI/master/formUI.class.min.js"></script>
```

Downloaded
```html
<script src= "./formUI.class.min.js"></script>
```
# Usage

### Example

```js
    let fieldEmail = document.querySelector("#email");
    let fieldDate = document.querySelector("#date");
    
    let errorsArea = document.querySelector(".containerErrors");

    let containerErrors = new FormUI(errorsArea);
    
    containerErrors.listen(fieldEmail,{
        regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	content : 'Please use a valid email'
    });
	
    containerErrors.listen(fieldDate,{
        regex: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
        content : 'Please use a correct date (dd/mm/yyyy)'
        onChange: {
	    enable: false
	}
    });
```
### new FormUI(el)
`el` is the container element which content the messages errors

### .listen(el, options)

Add a listener event on the selected element.
You can change options for differents field: 

| OPTIONS | TYPES | CONTENT|
| ------ | ------ |------ |
| node | `Element` | Name of the element will created when the element listened doesn't match.|
||| `Default` : 'li'|
| boxClass | `String` | Class' name of the node element.|
||| `Default` : 'formUI__box'|
| errorClass | `String` | Class' name of the node element when is doesn't match.|
||| `Default` : 'formUI__error'|
| content | `String`| Custom your delivered message |
||| `Default` : 'Bad field on {field tag name}'|
| regex | `Regex` | Apply your custom regex |
||| email : `/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/` |
||| date (dd/mm/yyyy) : `/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/` |
| onChange | `Object` | Edit the Css' node when the field is editing |
||| - `enable` (Boolean) : true |
||| - `class` (String) : 'formUI__change' |



### Development

Want to contribute? Great!

Write a message on the follow issue to add you on the project
[https://github.com/rltp/FormUI/issues/1]


### Todos

> - Add match between two fields
> - Add class on the field (style : border color)
> - ...

License
----

**GNU GENERAL PUBLIC LICENSE V3**
