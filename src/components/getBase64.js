/**
 * Created by 15755 on 2018/6/16.
 */
define(function(){
	return function (file,callback) {
		var maxWidth = 640;
		if(file.files && file.files[0]){
			var thisFile = file.files[0];
			if(thisFile.size>67108864){
				alert("图片不能超过8M");
				return
			};
			var reader = new FileReader();
			reader.onload = function(event){
				var imgUrl = event.target.result;
				var img = new Image();
				img.onload = function(){
					var canvasId = 'canvasBase64Imgid',
						canvas = document.getElementById(canvasId);
					if(canvas!=null){document.body.removeChild(canvas);}
					var canvas = document.createElement("canvas");
					canvas.innerHTML = 'New Canvas';
					canvas.setAttribute("id", canvasId);
					canvas.style.display='none';
					document.body.appendChild(canvas);
					canvas.width = this.width;
					canvas.height = this.height;
					var imageWidth = this.width,
						imageHeight = this.height;
					if (this.width > maxWidth){
						imageWidth = maxWidth;
						imageHeight = this.height * maxWidth/this.width;
						canvas.width = imageWidth;
						canvas.height = imageHeight;
					}
					var context = canvas.getContext('2d');
					context.clearRect(0, 0, imageWidth, imageHeight);
					context.drawImage(this, 0, 0, imageWidth, imageHeight);
					var base64 = canvas.toDataURL('image/png',1);
					var imgbase = base64.substr(22);
					callback(imgbase);
				};
				img.src = imgUrl;
			};
			reader.readAsDataURL(file.files[0]);
		}
	}
});