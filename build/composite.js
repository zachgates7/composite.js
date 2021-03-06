function draw(data, ctx, radius, lineWidth, fill){
	ctx.lineJoin = 'round';
	for(var key in data){
		var x = data[key].x;
		var y = data[key].y;
		ctx.fillStyle = data[key].color;
		for(var i = 0; i < x.length; ++i){
			ctx.beginPath();
			ctx.arc(x[i], y[i], radius, 0, Math.PI * 2, true);
			ctx.fill();
			ctx.closePath();
		}
		ctx.beginPath();
		ctx.moveTo(x[0], y[0]);
		for (i = 1; i < x.length; i++){
			ctx.lineTo(x[i], y[i]);
		}
		if (fill != false){
			ctx.fillStyle = fill;
			ctx.fill();
		}
		ctx.strokeStyle = data[key].color;
		ctx.stroke();
		ctx.closePath();
	}
}