
		function addX()
		{
			$('#shape').addClass('addX');					
		}
		function addZ()
		{
			$('#shape').addClass('addZ');					
		}
		function addY()
		{
			$('#shape').addClass('addY');					
		}
		function subX()
		{
			$('#shape').removeClass().addClass('subX');
		}
		function subY()
		{
			$('#shape').removeClass().addClass('subY');
		}
		function subZ()
		{
			$('#shape').removeClass().addClass('subZ');
		}
			$('.ft').click(function(){ $('#shape').removeClass().addClass('show-ft'); });
			$('.rt').click(function(){ $('#shape').removeClass().addClass('show-rt'); });
			$('.bk').click(function(){ $('#shape').removeClass().addClass('show-bk'); });
			$('.lt').click(function(){ $('#shape').removeClass().addClass('show-lt'); });
			$('.tp').click(function(){ $('#shape').removeClass().addClass('show-tp'); });
			$('.bm').click(function(){ $('#shape').removeClass().addClass('show-bm'); });
	
			
		