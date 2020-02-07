var c = document.getElementById("myCanvas");
							var ctx = c.getContext("2d");
							ctx.beginPath();
							ctx.save();
	
							ctx.beginPath();
							ctx.translate(535,60);
							ctx.lineWidth = 2;
							ctx.strokeStyle = "#00ffee";
							ctx.strokeRect(-20, 0, 60,6);
							ctx.rotate((Math.PI/180)*5);
							ctx.stroke();
							ctx.restore();
							ctx.save();

							ctx.beginPath();
							ctx.save();
							ctx.translate(535,170);
							ctx.lineWidth = 2;
							ctx.fillStyle = "#ffe600";
							ctx.fillRect(-20, 0, 60,10);
							ctx.rotate((Math.PI/180)*5);
							ctx.stroke();
							ctx.restore();
							ctx.save();


							function calc{
								alert("ghbjn");
								var m1 = document.getElementById("i1").value;
								var m2 = document.getElementById("i2").value;
								var m3 = document.getElementById("i3").value;
								alert("m1");
								var m4 = (m2-m3)/(m2+m3);
								document.getElementById("i4").value=m4;
							}