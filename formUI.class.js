class FormUI {

    constructor(el){
        this.container = el;
    }

    listen(el, obj) {

        let node = {
            options : Object.assign({}, {
                type: null,
                content: 'Bad field on ' + el.getAttribute('name'),
                node: 'li',
                boxClass: 'formUI__box',
                errorClass: 'formUI__error',
                regex: /^/,
                onChange: {
                    enable: true,
                    class: 'formUI__change'
                }
            }, obj),
            el: el
        };

        if(node.options.onChange.enable) node.el.addEventListener('keydown', ()=>{
            if(!node.box) return;
            node.box.classList.add(node.options.onChange.class);
            node.box.classList.remove(node.options.errorClass);
        });

        node.el.addEventListener('change', () =>{
            if(!node.options.regex.test(node.el.value)){
                if(!node.box){
                    node.box = document.createElement(node.options.node);
                    node.box.innerHTML = node.options.content;
                    node.box.classList.add(node.options.errorClass);
                    this.container.append(node.box);
                }else{
                    node.box.classList.add(node.options.errorClass);
                    node.box.classList.remove(node.options.onChange.class);
                }
            }else if(node.box) {
                this.container.removeChild(node.box);
                node.box = null;		
            }
        });
    }
}