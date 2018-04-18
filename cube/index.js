
		function X(slider_value,ka,kb)
		{
			s=slider_value/10;
			s11=ka/10;
			s12=kb/10;
			document.getElementById("shape").style.WebkitTransform = ("scaleX("+s+") scaleY("+s11+") scaleZ("+s12+")");
			retrun 
		}
				
		function changeScale(newScale)
		{
			

			var deg=newScale*4;
    		document.getElementById("shape").style.WebkitTransform = "rotateX("+deg+"deg)";
    		document.getElementById("shape").style.WebkitTransform = "rotateY("+deg+"deg)";
    		document.getElementById("shape").style.WebkitTransform = "rotateZ("+deg+"deg)";
		}		
			
			