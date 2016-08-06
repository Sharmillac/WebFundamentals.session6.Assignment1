  function getMinMax()
  {
        var lValues = [];
	lValues = [200,400,300,700];
        var lMinNum , lMaxNum;
        document.write("<P>Input Array =  "+ lValues + "</p>");
        for(var i = 0; i < lValues.length; i++)
        {
                 if(lMinNum == undefined)
                 	lMinNum  = lValues[i];	
		if(lMaxNum == undefined)
                 	lMaxNum = lValues[i];

                if( lValues[i] < lMinNum)
			lMinNum = lValues[i] ;
		if( lValues[i] > lMaxNum)
			lMaxNum = lValues[i] ;	  	

	}
        document.write("<P>Min No "+ lMinNum + "</p>");
        document.write("<P>Max No "+ lMaxNum + "</p>");
        
  }