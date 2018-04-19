		function X(slider_value,ka,kb,rx,ry,rz)
		{
			s=slider_value/10;
			s11=ka/10;
			s12=kb/10;
			rx=rx*8;
			ry=ry*8;
			rz=rz*8;
			document.getElementById("shape").style.WebkitTransform = ("scaleX("+s+") scaleY("+s11+") scaleZ("+s12+") rotateX("+rx+"deg) rotateY("+ry+"deg) rotateZ("+rz+"deg)");

		}
				