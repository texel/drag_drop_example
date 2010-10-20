(function( $ ){
  
  var methods = {
    init : function( options ) {

     // Chainable!
    return this.each(function(){

       var $this = $(this),
           data  = $this.data('dndUploader', options);
           
       // If the plugin hasn't been initialized yet
       if ( ! data ) {
         // Initial setup

       }
       
       $this.bind('dragenter.dndUploader', methods.dragEnter);
       $this.bind('dragover.dndUploader', methods.dragOver);
       $this.bind('drop.dndUploader', methods.drop);
     });
    },
    
    dragEnter : function ( event ) {
      event.stopPropagation();
      event.preventDefault();

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