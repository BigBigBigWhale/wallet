var defaultOption = {
    url: '',
    type: 'GET',
    data: {},
    dataType: 'json',
};
var ErrorCode = {
    SUCCESS: 0,
    SYSTEM_REDIRECT: 302,
    SYSTEM_ERROR: 9901,
    FIELD_EXIST: 10006,
};

let ajax = function (opts) {
    var ajaxOption = $.extend({}, defaultOption, opts);
    // if (ajaxOption.type.toUpperCase() == 'POST') {
        // 如果是POST提交，自动附带csrf token
        // ajaxOption.data[$("[name=csrf-param]").attr("content")] = $("[name=csrf-token]").attr("content");
    // }

    var dtd = $.Deferred();
    $.ajax(ajaxOption).done(function (data) {
         if (data.state !== ErrorCode.SUCCESS) {
            // 有错误
            dtd.reject(data, data.message, data);
        } else {
            dtd.resolve(data.data);
        }
    }).fail(function(xhr, msg, e) {
        if(xhr.readyState == 4) {
            alert('请求超时')
        }
        dtd.reject(e, msg, xhr);
    });

    return dtd.promise();
};
export default ajax;