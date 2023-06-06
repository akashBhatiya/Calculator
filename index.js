var ans = document.getElementById('ans');
var curr = document.getElementById('curr-txt');
var prev = document.getElementById('prev-txt');
var idClear = document.getElementById('clear');

var no1 = document.getElementById('no1');
var no2 = document.getElementById('no2');
var no3 = document.getElementById('no3');
var no4 = document.getElementById('no4');
var no5 = document.getElementById('no5');
var no6 = document.getElementById('no6');
var no7 = document.getElementById('no7');
var no8 = document.getElementById('no8');
var no9 = document.getElementById('no9');
var no0 = document.getElementById('no0');
var no00 = document.getElementById('no00');
var point = document.getElementById('point');

var module = document.getElementById('module');
var multi = document.getElementById('multi'); 
var devide = document.getElementById('devide');
var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var signChange = document.getElementById('sign-change');

var ans = document.getElementById('ans');

var var1 = '';
var var2 = '';
var expression = "";

var activeVar1 = true;

no1.addEventListener('click', function(){
    append(1);
});
no2.addEventListener('click', function(){
    append(2);
});
no3.addEventListener('click', function(){
    append(3);
});
no4.addEventListener('click', function(){
    append(4);
});
no5.addEventListener('click', function(){
    append(5);
});
no6.addEventListener('click', function(){
    append(6);
});
no7.addEventListener('click', function(){
    append(7);
});
no8.addEventListener('click', function(){
    append(8);
});
no9.addEventListener('click', function(){
    append(9);
});
no0.addEventListener('click', function(){
    append(0);
});
no00.addEventListener('click', function(){
    append("00");
});
point.addEventListener('click', function(){
    append(".");
})


multi.addEventListener('click', function(){
    funcMulti();
});

plus.addEventListener('click', function(){
    funcPlus();
});

minus.addEventListener('click', function(){
    funcMinus();
});
devide.addEventListener('click', function(){
    funcDevide();
});
module.addEventListener('click', function(){
    funcModule();
})

signChange.addEventListener('click', function(){
    funcSignChange();
});

ans.addEventListener('click', function(){
    equalTo();
});


idClear.addEventListener('click', clear);


function clear(){
    curr.innerHTML = "";
    prev.innerHTML = "";
    var1 = "";
    var2 = "";
    activeVar1 = true;
    expression = "";
}


function funcModule(){
    if(activeVar1 == false){
        expression += var2;
        var2 = "";
        expression = eval(expression);
        var1 = expression;
        prev.innerHTML = expression + "%";
        curr.innerHTML = "";
        expression+="%";
    }
    else{
        prev.innerHTML = var1 +"%";
        expression = var1 + "%";
        activeVar1 = false;
        curr.innerHTML = "";
    }
}

function funcMulti(){
    if(activeVar1 == false){
        expression += var2;
        var2 = "";
        expression = eval(expression);
        var1 = expression;
        prev.innerHTML = expression + "*";
        curr.innerHTML = "";
        expression+="*";
    }
    else{
        prev.innerHTML = var1 +"*";
        expression = var1 + "*";
        activeVar1 = false;
        curr.innerHTML = "";
    }
}


function funcPlus(){
    if(activeVar1 == false){
        expression += var2;
        var2 = "";
        expression = eval(expression);
        var1 = expression;
        prev.innerHTML = expression + "+";
        curr.innerHTML = "";
        expression+="+";
    }
    else{
        prev.innerHTML = var1 + "+";
        expression = var1 + "+";
        activeVar1 = false;
        curr.innerHTML = "";
    }
}

function funcMinus(){
    if(activeVar1 == false){
        expression += var2;
        var2 = "";
        expression = eval(expression);
        var1 = expression;
        prev.innerHTML = expression + "-";
        curr.innerHTML = "";
        expression+="-";
    }
    else{
        prev.innerHTML = var1 + "-";
        expression = var1 + "-";
        activeVar1 = false;
        curr.innerHTML = "";
    }
}

function funcDevide(){
    if(activeVar1 == false){
        expression += var2;
        var2 = "";
        expression = eval(expression);
        var1 = expression;
        prev.innerHTML = expression + "/";
        curr.innerHTML = "";
        expression+="/";
    }
    else{
        prev.innerHTML = var1 + "/";
        expression = var1 + "/";
        activeVar1 = false;
        curr.innerHTML = "";
    }
}

function funcSignChange(){
    if(activeVar1 ==true){
        var temp = parseFloat(var1);
        var1 = temp*-1;
        curr.innerHTML = var1;
    }
    else{
        var temp = parseFloat(var2);
        var2 = temp*-1;
        curr.innerHTML = var2;
    }
}


function append(n){
    if(activeVar1 == true){
        var1 += n;
        curr.innerHTML = var1;
    }
    else{
        var2 += n;
        curr.innerHTML = var2;
    }    
}

function equalTo(){
    if(var2 == ""){
        var2 = var1;
    }
    expression += var2;
    var2 = "";
    prev.innerHTML="";
    expression = eval(expression);
    curr.innerHTML = expression;
    var1 = expression;
    activeVar1 = true;
}