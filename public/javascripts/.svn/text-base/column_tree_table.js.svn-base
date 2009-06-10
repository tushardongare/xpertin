/*
 * Copyright 2009 Publishers International Linking Association
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// See http://plugins.jquery.com/project/column_tree_table

(function($) {

  $.fn.columnTreeTable = function( options ) {
    // incorporate the use and default settings
    var settings = $.extend( {}, $.fn.columnTreeTable.defaults, options );
    // loop over selections and initialize them
    return this.each( function() {
      var table = $(this);
      // loop over the table's rows and initialize them
      $('tr', table).each( function(i) {
        var row = this;
        var tree_cell = $(row).children()[settings.tree_column_index];
        var decendents_count = count_direct_decendents( table, row );
        var ancestors_count = count_ancestors( row );
        if ( decendents_count > 0 ) {
          var toggle_id = row.id+'_toggle';
          $(tree_cell).prepend( '<span style="display: inline-block; cursor: pointer;" class="ui-icon ui-icon-triangle-1-s" id="'+toggle_id+'" />' );
          $('#'+toggle_id).click( function() {
            toggle_decendents( table, row, this );
          } );
          $(tree_cell).css( 'padding-left', ''+(ancestors_count*16)+'px' );
        }
        else {
          $(tree_cell).css( 'padding-left', ''+((ancestors_count+1)*16)+'px' );
        }
        $(row).data( 'columnTreeTable.visible', $(row).css('display') != 'none' );
      } );
      stripe_rows( table );
    } );
  };

  $.fn.columnTreeTable.defaults = {
    tree_column_index: 0,
  };

  function select_all_decendents( table, row ) {
    var all_decendents = [];
    var direct_decendents = $('[idref='+row.id+']',table);
    for ( var i = 0; i < direct_decendents.length; i++ ) {
      jQuery.merge( all_decendents, select_all_decendents( table, direct_decendents[i] ) );
    }
    jQuery.merge( all_decendents, direct_decendents );
    return all_decendents;
  }

  function select_direct_decendents( table, row ) {
    return $('[idref='+row.id+']',table);
  }

  function count_direct_decendents( table, row ) {
    return $('[idref='+row.id+']',table).size();
  }

  function count_ancestors( row ) {
    var ancestor_id = $(row).attr('idref');
    return ancestor_id ? 1 + count_ancestors( $('#'+ancestor_id)[0] ) : 0;
  }

  function hide_all_decendents( table, row ) {
    // hide all the row's direct and indirect decendents
    var decendents = select_all_decendents( table, row );
    for ( var i = 0; i < decendents.length; i++ ) {
      $(decendents[i]).css( 'display', 'none' );
    }
  }

  function show_visible_decendents( table, row ) {
    var decendents = select_direct_decendents( table, row );
    // display the row's decendents
    for ( var i = 0; i < decendents.length; i++ ) {
      var decendent_row = decendents[i];
      $(decendent_row).css( 'display', 'table-row' );
    }
    // also display the row's visible decendents
    for ( var i = 0; i < decendents.length; i++ ) {
      var decendent_row = decendents[i];
      if ( $(decendent_row).data( 'columnTreeTable.visible' ) ) {
        show_visible_decendents( table, decendent_row );
      }
    }
  }

  function stripe_rows( table ) {
    $('tr', table).each( function(i) {
      $(this).toggleClass( 'strip'+(i%2) );
    } );
  }

  function toggle_decendents( table, row, toggle ) {
    if ( $(row).data('columnTreeTable.visible') ) {
      $(toggle).removeClass('ui-icon-triangle-1-s');
      $(toggle).addClass('ui-icon-triangle-1-e');
      $(row).data('columnTreeTable.visible', false);
      hide_all_decendents( table, row );
    }
    else {
      $(toggle).removeClass('ui-icon-triangle-1-e');
      $(toggle).addClass('ui-icon-triangle-1-s');
      $(row).data('columnTreeTable.visible', true);
      show_visible_decendents( table, row );
    }
  }

}) (jQuery);
