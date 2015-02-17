
var op1;
var op2;
var result;
var operacion;

function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

jQuery(document).ready(function() {

	$('#1').click(function(){
		changer('display','1');
	});

	$('#2').click(function(){
		changer('display','2');
	});

	$('#3').click(function(){
		changer('display','3');
	});

	$('#4').click(function(){
		changer('display','4');
	});

	$('#5').click(function(){
		changer('display','5');
	});

	$('#6').click(function(){
		changer('display','6');
	});

	$('#7').click(function(){
		changer('display','7');
	});

	$('#8').click(function(){
		changer('display','8');
	});

	$('#9').click(function(){
		changer('display','9');
	});

	$('#suma').click(function(){
		if(document.getElementById('display').innerHTML===''){
			alert('Elige el primer operando');
		}else{
			op1=parseInt(document.getElementById('display').innerHTML);
			changer('display','');
			operacion='suma';
		}
	});

	$('#resta').click(function(){
		if(document.getElementById('display').innerHTML===''){
			alert('Elige el primer operando');
		}else{
			op1=parseInt(document.getElementById('display').innerHTML);
			changer('display','');
			operacion='resta';
		}
	});


	$('#multiplicacion').click(function(){
		if(document.getElementById('display').innerHTML===''){
			alert('Elige el primer operando');
		}else{
			op1=parseInt(document.getElementById('display').innerHTML);
			changer('display','');
			operacion='multiplicacion';
		}
	});


	$('#division').click(function(){
		if(document.getElementById('display').innerHTML===''){
			alert('Elige el primer operando');
		}else{
			op1=parseInt(document.getElementById('display').innerHTML);
			changer('display','');
			operacion='division';
		}
	});



	$('#igual').click(function(){
		if(document.getElementById('display').innerHTML===''){
			alert('Elige el segundo operando');
		}else{
			op2=parseInt(document.getElementById('display').innerHTML);
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
			        break
			} 
			changer('display',result);
		}
	});

});

