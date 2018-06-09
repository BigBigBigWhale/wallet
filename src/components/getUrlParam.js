define(function(){
	return function(url){
        url = url || window.location.search;
		var query   = url.substr(url.indexOf('?') + 1),
	        params  = query.split('&'),
	        len     = params.length,
	        result  = {},
	        i       = 0,
	        key, value, item, param;
	    
	    for (; i < len; i++) {
	    	if(params[i].length == 0) continue;
	        param   = params[i].split('=');
	        key     = param[0];
	        value   = param[1];
	        
	        item = result[key];
	        if ('undefined' == typeof item) {
	            result[key] = value;
	        } else if (Object.prototype.toString.call(item) == '[object Array]') {
	            item.push(value);
	        } else { // 这里只可能是string
	            result[key] = [item, value];
	        }
	    }
	    
	    return result;
	}
});