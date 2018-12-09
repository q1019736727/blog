window.Controller = function(options) {
    var init = options.init
    // this.bindEvents = options.bindEvents
    var obj
    // for(let key in options){
    //     if (key != 'init') {
    //         obj[key] = options.key
    //     }
    // }
    obj = {
        init:function (view,model) {
            this.view = view
            this.model = model
            // this.bindEvents()
            init.call(this,view,model)
        },
        // bindEvents:function() {
        //
        // }
    }
    return obj
}