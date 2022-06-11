document.getElementById('timer')=timer;
var hr;
var min;
var sec;
var start_time;
function start(){
	hr=0;
	min=0;
	sec=0;
	start_time=true;
	timerRun();
}
    function timerRun(){
    if (start_time == true) {	
	sec=parseInt(sec);
	min=parseInt(min);
	hr=parseInt(hr);
	sec++;
	if (sec==60) {
		min++;
		sec=0;
	}
	if (min==60) {
		hr++;
		min=0;
		sec=0;
	}
	if (sec==0 || sec<10) {
		sec='0'+sec;
	}
	if (min==0 || min<10) {
		min='0'+min;
	}
	if (hr==0 || hr<10) {
		hr='0'+hr;
	}
	timer.innerHTML=hr+':'+min+':'+sec;
	setTimeout('timerRun()',1000);
}}

function stop() {
	if (start_time == true) {
	start_time=false;
}}
function reset() {
	timer.innerHTML="00:00:00";
	start_time=false;
	hr=0;
	min=0;
	sec=0;
}