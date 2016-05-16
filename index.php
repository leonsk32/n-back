<html>
<head>
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="n-back.js"></script>
</head>
<body>
	<h2>n-back</h2>
	<table>
		<tr>
			<td align="right"><b> n：</b></td>
			<td><input type="text" id="n" size="10"></td>
		</tr>
		<tr>
			<td align="right"><b> number of problems：</b></td>
			<td><input type="text" id="numProblems" size="10"></td>
		</tr>
		<tr>
			<td align="right"><b> time limit：</b></td>
			<td><input type="text" id="timeLimit" size="10"></td>
		</tr>
	</table>
	<input type="button" value="restart" id="restart"></body>
	<br><br><br>
	<font size="6" id="problem"></font>
	<br>
	<canvas id="timer" width=1000 height=30></canvas>
	<div id="answer"></div>
</body>
</html>