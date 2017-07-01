var tasksArray = [];
var counter = 0;

function init() {
    //localStorage.clear();
    if (localStorage.tasksRecord) {
        tasksArray = JSON.parse(localStorage.tasksRecord);
    }

    bootbox.prompt({
        title: "Please enter your name!",
        onEscape: false,
        closeButton: false,
        callback: function(result) {
            if ((result == null || result == "" || result == undefined)) {
                console.log(result);
            } else {
                var txt = "Welcome " + result + "!";
                document.getElementById("welcome").innerHTML = txt;
                document.getElementById("user").value = result;
            }
        }
    });
}

function setPopup(taskId, taskName, taskDuration) {
    counter++;
    var startTime = new Date();
    var finishTime = new Date();
    finishTime.setSeconds(finishTime.getSeconds() + taskDuration);
    var taskObj = {
        name: taskName,
        startTime: startTime,
        finishTime: finishTime
    };
    tasksArray.push(taskObj);

    localStorage.tasksRecord = JSON.stringify(tasksArray);
    if (counter == 4) {
        var userName = document.getElementById("user").value;
        var msg;
        if (userName == undefined || userName == null || userName == "") {
            msg = "Thank you for participating!";
        } else {
            msg = "Thank you for participating " + userName + "!";
        }
        setTimeout(function() {
            bootbox.alert(msg);
        }, taskDuration * 1200);
    }
}