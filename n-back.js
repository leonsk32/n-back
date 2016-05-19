var answers = []; //正解群
var answer = null; //プレイヤー解答
var problem;
var n; //n数
var x;
var y;
var operator;
var max; //出題数
var index = 0; //何問目か
var score = 0; //得点
var timerID;
var timeout; //制限時間
var start;
var now;
var datet; //経過時間
var intervalID;

function init(_n, _max, _timeout){
	n = _n;
	answers = new Array(_n + 1);
	timeout = _timeout;
	max = _max;
}

function makeProblem(){
	//1~20
	while(true){
		x = Math.floor(Math.random() * 20) + 1;
		y = Math.floor(Math.random() * 20) + 1;
		operator = Math.floor(Math.random() * 2);
		if(operator != 0 || x >= y) break;
	}

	if(operator) answers.push(x + y);
	else answers.push(x - y);
}

function ans2str(){
	if(answer == null) return "";
	else return answer.toString();
}

function drawTimer(){
	var canvas = document.getElementById('timer');
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		context.fillStyle = "rgb(0, 0, 255)";
		now = new Date();
		datet = now.getTime() - start.getTime();
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillRect(10,20,500 - datet/timeout*0.5,10);
	}
}

function next(){
	clearTimeout(timerID);
	clearInterval(intervalID);
	if (index > n){
		if (answers[0] == answer) score++;
	}
	answer = null;
	index++;
	if (index == max + n + 1){
		$("#problem").text("your score：" + score.toString() + "  /  " + max.toString());
		index = 0;
		score = 0;
	}
	else{
		answers.shift();
		makeProblem();
		var o;
		if (operator) o = "＋";
		else o = "ー";
		problem = x.toString() + "  " + o + "  " + y.toString() + "  ＝  ";
		$("#problem").text(problem + ans2str(answer));
		start = new Date();
		intervalID = setInterval(drawTimer, 100);
		timerID = setTimeout(next, timeout * 1000);
		//$("#answer").text(answers[0]);
		console.log(answers);
	}
}

$(function() {
	init(3,30,5);
	$("#problem").text(n + " back × " + max + " problems × " + timeout + " seconds");
	$("#restart").click(function(){
		clearTimeout(timerID);
		clearInterval(intervalID);
		init(Number(document.getElementById("n").value), Number(document.getElementById("numProblems").value), Number(document.getElementById("timeLimit").value));
		index = 0;
		score = 0;
		$("#problem").text(n + " back × " + max + " problems × " + timeout + " seconds");
	});

	document.onkeydown = function (e){
		var key = e.keyCode;
		//数字
		if(key >= 48 && key <= 57){
			if(answer == null) answer = 0;
			answer = answer * 10 + key - 48;
			$("#problem").text(problem + ans2str(answer));
		}
		//Enter
		else if(key == 13){
			next();
		}
		//Space
		else if(key == 32){
			answer = null;
			$("#problem").text(problem + ans2str(answer));
		}
	}
})
