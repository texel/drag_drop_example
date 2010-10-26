(function( $ ){
  
  var methods = {
    init : function( options ) {

    return this.each(function(){

       var $this = $(this);
       
       $this.bind('dragenter.dndUploader', methods.dragEnter);
       $this.bind('dragover.dndUploader', methods.dragOver);
       $this.bind('drop.dndUploader', methods.drop);
       $this.bind('dragleave.dndUploader', methods.dragLeave);
     });
    },
    
    dragEnter : function ( event ) {    
      event.stopPropagation();
      event.preventDefault();
      
      return false;
    },
    
    dragLeave : function ( event ) {
      var $this = $(this);
      
      event.stopPropagation();
      event.preventDefault();
      
      if (!methods.inside(event, $this)) {
        console.log('actually left');
      };
      
      return false;
    },
    
    dragOver : function ( event ) {      
      event.stopPropagation();
      event.preventDefault();
                  
      return false;
    },

    drop : function( event ) {    
      event.stopPropagation();
      event.preventDefault();
            
      return false;
    },
    
    inside : function( event, element ) {
      if (event.offsetX > element.outerWidth())
        return false;
      
      if (event.offsetY > element.outerHeight())
        return false;
        
      if (event.offsetX < 0 || event.offsetY < 0)
        return false;
        
      return true;
    }
  };
  
  $.fn.dndUploader = function( method ) {
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.dndUploader' );
    }
  };
})( jQuery );