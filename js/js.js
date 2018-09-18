  /*var meatsTotal = 0;
  var persons = [0,0,0];
  
  $('.person').each(function(){
    var total = 0;
    var operation = '';
    countedTotal = 0;
    $('a',this).on('click',function(element){
      element.preventDefault();
      if($(this)
        .parents('.person')
          .hasClass('man')){
        total = parseInt($(this)
                  .parents('.person')
                    .find('.total')
                      .data('value'));
        kind = 'man';
      } else if($(this)
                  .parents('.person')
                    .hasClass('woman')){
        total = parseInt($(this
                            ).parents('.person')
                              .find('.total')
                                .data('value'));
        kind = 'woman';
      } else if($(this)
                  .parents('.person')
                    .hasClass('child')){
        total = parseInt($(this)
                          .parents('.person')
                            .find('.total')
                              .data('value'));
        kind = 'child';
      }
      if($(this).hasClass('reduce')){
        operation = 'reduce';
      } else if($(this).hasClass('increase')){
        operation = 'increase';
      }
      personCounter(kind,total,operation);
      $(this).parents('.person').find('.total').data('value',countedTotal).html(countedTotal);
      $('.calc-results >.'+kind+' >span').html(countedTotal);
    });
  });
  
  function personCounter(kind,total,operation){
    if(operation === 'reduce') {
      if(total > 0){
        total = total - 1;
      }
    }
    else if(operation === 'increase') {
      total = total + 1;
    }
    if(kind === 'man'){
      persons[0] = total;
    } else if(kind === 'woman'){
      persons[1] = total;
    } if(kind === 'child'){
      persons[2] = total;
    }
    countedTotal = total;
    return countedTotal;
  }
  
  function totalCounter(){
    resultLine = '';
    meatsTotal = 0;
    for(var k in meats) {
      if(!meats[k].selected) {
        continue;
      }
      meats[k].total = 0;
      for(var i = 0; i < persons.length; i++){
        meats[k].total += persons[i] * meats[k].grams[i];
      }
      meatsTotal += meats[k].total;
      resultLine += '<p class="result-line">' + meats[k].total.toFixed(2) + '0 kg de '  + '<span class="meat-name">' + meats[k].name + '</span></p>';
    }
    $('.totalWeight').html(meatsTotal.toFixed(2));
    $('.results-kind').html(resultLine);
    //alert(pigRibsTotal);
  }
  
  $('.kinds li').on('click',function(){
    console.log($('.data-kind',this).data('status'));
    if($('.data-kind',this).data('status') == false){
      $('.action',this).fadeIn(150);
      $('.data-kind',this).data('status',true);
      meatsObject = $('.data-kind',this).data('kind');
      console.log(meatsObject);
      meats[meatsObject].selected = true;
    } else {
      $('.action',this).fadeOut(150);
      $('.data-kind',this).data('status',false);
      meatsObject = $('.data-kind',this).data('kind');
      meats[meatsObject].selected = false;
    }
  });
  
  $('.calcular').on('click',function(element){
    element.preventDefault();
    totalCounter();
    console.log('calc click');
    $('#calc-result-section').slideDown();
  });
  
  $('.calcular-novamente').on('click',function(element){
    element.preventDefault();
    var calcPersons = $("#guests-section");
    var offset = calcPersons.offset();
    var personsTop = offset.top - 117;
    $('.calc-result-section').slideUp();
    $('body, html').animate({
      scrollTop: personsTop
      }, 200, function() {
      // Animation complete.      
    });
  });
  
  $('#calc-result-section .imprimir').on('click',function(element){
    element.preventDefault();
    window.print();
  });
  
  */

  function operacao(tipo){
    var total = document.getElementsByClassName('total');
    if(tipo=="menos"){
      total -= 1;

    }else if(tipo=="mais"){
      total += 1;
    }
  }
  

  function verificar( nome, quantidade ) {
		saida = "Os checkboxes checados são:";
		// itera baseado na quantidade de elementos
		for ( i = 0; i < quantidade; i++ ) {
		    // obtém cada elemento pelo id
		    checkBox = document.getElementById( nome + ( i + 1 ) );
		    // se o checkbox estiver marcado, adiciona mais uma linha na string de saida.
		    if ( checkBox.checked ) {
		        saida += "\n" + checkBox.value;
		    }
		}
		// mostra a saída
		alert( saida );
	}
  


  




  
  
  
  
  
  
  
