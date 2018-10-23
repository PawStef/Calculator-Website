function insert(num){
		document.form.numberView.value = document.form.numberView.value+num;
	}
	
function equal(){
		var exp = document.form.numberView.value
		if(exp){
				document.form.numberView.value = eval(exp);
			}
	}	
	
function clean(){
		document.form.numberView.value = "";
	}
	
function err(){
		var exp = document.form.numberView.value;
		document.form.numberView.value = exp.substring(0,exp.length-1);
	}