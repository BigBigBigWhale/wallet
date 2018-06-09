function parseDate(timeStr) {
    if (typeof timeStr === 'undefined') {
        // 时间字符串
        return new Date('2030-01-01');
    } else if (timeStr > 1000000000 * 1000 / 10) {
        // 毫秒数 或者本身就是Date
        return new Date(timeStr);
    } else if (timeStr > 1000000000 / 10) {
        // 秒数
        return new Date(timeStr * 1000);
    } else if (typeof timeStr === 'number') {
        // 多少秒以后
        return new Date((new Date()).getTime() + timeStr * 1000);
    } else {
        // 时间字符串
        return new Date(typeof timeStr === 'string' ? timeStr.replace(/\-/g, '/') : timeStr);
    }
}


var Storage = function(projectName, storage) {
    if(!projectName) throw 'projectName 不能为空';
    storage = storage || window.localStorage;
    if(!storage) throw '当前环境不支持storage';

    // 解码及编码后存入storage
    var _set = function(key, value) {
        return storage.setItem(key, JSON.stringify(value));
    };
    var _get = function(key) {
        var value = storage.getItem(key);
        return value ? JSON.parse(value) : undefined;
    };
    var _remove = function(key) {
        return storage.removeItem(key);
    };

    // 所有键循环调用
    var _each = function(func) {
        for(var i=0; i < storage.length; i++) {
            func(storage.key(i));
        }
    }

    // 设置键名
    this.set = function(key, value, expired) {
        return this.setWithProject(projectName, key, value, expired);
    };
    this.setWithProject = function(projectName, key, value, expired) {
        return _set(projectName + '@' + key, {
            'value': value,
            'expired': parseDate(expired || 2592000).getTime(),
        });
    };

    // 获取键
    this.get = function(key) {
        return this.getWithProject(projectName, key);
    };
    this.getWithProject = function(projectName, key) {
        var value = _get(projectName + '@' + key);
        if(!value) return undefined;
        if(value.expired < new Date()) {
            // 如果已经过期
            this.set(key, null);
            return undefined;
        }
        return value.value;
    };

    // 如果缓存过，直接返回，否则执行dataFunc并缓存、返回函数结果
    this.cache = function(key, dataFunc, expired) {
        var value = this.get(key);
        if(typeof value === 'undefined') {
            value = dataFunc();
            if(typeof value === 'undefined') {
                throw '获取数据函数没有返回值';
            }
            this.set(key, value, expired);
        }
        return value;
    };

    // 根据前缀获取
    this.getByPrefix = function(prefix) {
        var list = [];
        var self = this;
        _each(function(key) {
            if(key.startsWith(projectName + '@' + prefix)) {
                list.push(self.get(key));
            }
        })
        return list;
    };

    // 删除键名
    this.remove = function(key) {
        return this.removeWithProject(projectName, key);
    };
    this.removeWithProject = function(projectName, key) {
        return _remove(projectName + '@' + key);
    };

    // 获取已经缓存内容的个数
    this.length = function() {
        var length = 0;
        _each(function(key) {
            if(key.indexOf(projectName + '@')) {
                length++;
            }
        })
        return length;
    };

    // 获取已经缓存内容的个数
    this.encodeImg = function(url, success) {
        var img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');

        // Take action when the image has loaded
        img.addEventListener("load", function () {
            var imgCanvas = document.createElement("canvas"),
                imgContext = imgCanvas.getContext("2d");

            // Make sure canvas is as big as the picture
            imgCanvas.width = img.width;
            imgCanvas.height = img.height;

            // Draw image into canvas element
            imgContext.drawImage(img, 0, 0, img.width, img.height);

            // 转换成功回调
            success(imgCanvas.toDataURL(/(^|\W)webp($|\W)/.test(url) ? "image/webp" : "image/png"))
        }, false);

        img.src = url;
    };
};

export default Storage;
