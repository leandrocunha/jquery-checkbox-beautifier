(function ( $ ) {
 
    $.fn.ckb_beautifier = function() {
    	
    	this.each(function(){
    		var me = $(this);
    		
    		me.hide();
    		me.wrap('<div id="ck-beautifier-wrapper"><span>');
    		me.parent().click(function(e){
    			$(e.target).toggleClass('checked');
    			
    			if(me.is(':checked')){
    				me.removeAttr('checked', 'checked');
    			}else{
    				me.attr('checked', 'checked');
    			}
    			
    		});
    	});
    	
        return this;
    };
 
}( jQuery ));