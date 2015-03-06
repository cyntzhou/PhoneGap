var STUFF = (function(module){

    module.Pressed = function(resultObject){
	resultObject.prepend(Date() + '<br/>');
    };

    return module;
}(STUFF || {}));
