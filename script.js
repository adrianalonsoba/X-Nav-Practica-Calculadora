
var op1;
var op2;
var result;
var operacion;

function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function catenate(id,value){
	var element = document.getElementById(id);
	element.innerHTML+=value;
}

function cleanForm(){
	var form=document.getElementById('display2').reset();
}

jQuery(document).ready(function() {


   formElement = document.getElementById('text');
   writeElement = document.getElementById('display');
   formElement.addEventListener('input', function(e) {
      writeElement.innerHTML = this.value;
   });

	$('#1').click(function(){
		catenate('display','1');
	});

	$('#0').click(function(){
		catenate('display','0');
	});

	$('#2').click(function(){
		catenate('display','2');
	});

	$('#3').click(function(){
		catenate('display','3');
	});

	$('#4').click(function(){
		catenate('display','4');
	});

	$('#5').click(function(){
		catenate('display','5');
	});

	$('#6').click(function(){
		catenate('display','6');
	});

	$('#7').click(function(){
		catenate('display','7');
	});

	$('#8').click(function(){
		catenate('display','8');
	});

	$('#9').click(function(){
		catenate('display','9');
	});

	$('#borrar').click(function(){
		changer('display','');
		cleanForm();
	});

	$('#coma').click(function(){
		catenate('display','.');
	});


	$('#suma').click(function(){
		if(document.getElementById('display').innerHTML===''){
			alert('Elige el primer operando');
		}else{
			op1=Number(document.getElementById('display').innerHTML);
			changer('display','');
			cleanForm();
			operacion='suma';
		}
	});

	$('#resta').click(function(){
		if(document.getElementById('display').innerHTML===''){
			alert('Elige el primer operando');
		}else{
			op1=Number(document.getElementById('display').innerHTML);
			changer('display','');
			cleanForm();
			operacion='resta';
		}
	});


	$('#multiplicacion').click(function(){
		if(document.getElementById('display').innerHTML===''){
			alert('Elige el primer operando');
		}else{
			op1=Number(document.getElementById('display').innerHTML);
			changer('display','');
			cleanForm();
			operacion='multiplicacion';
		}
	});


	$('#division').click(function(){
		if(document.getElementById('display').innerHTML===''){
			alert('Elige el primer operando');
		}else{
			op1=Number(document.getElementById('display').innerHTML);
			changer('display','');
			cleanForm();
			operacion='division';
		}
	});



	$('#igual').click(function(){
		if(document.getElementById('display').innerHTML===''){
			alert('Elige el segundo operando');
		}else{
			op2=Number(document.getElementById('display').innerHTML);
			switch(operacion) {
			    case 'suma':
			        result=op1+op2;
			        break;
			    case 'resta':
			    	result=op1-op2;
			        break;
			    case 'multiplicacion':
			    	result=op1*op2;
			        break;
			    case 'division':
			    	result=op1/op2;
			        break;
			} 
			changer('display',result);
		}
	});
});

