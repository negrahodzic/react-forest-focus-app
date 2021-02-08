import React, { Component } from "react";

class Timer extends Component {
    startTimer(min) {
            var minutes = parseInt(min); //=min
            var now = new Date();
            var countDownDate = new Date(now);
            countDownDate.setMinutes(now.getMinutes() + minutes);

            // Update the count down every 1 second
            var x = setInterval(function () {
                var now = new Date().getTime();
                var distance = countDownDate - now;

                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("timer").innerHTML = hours + "h "
                    + minutes + "m " + seconds + "s ";

                // When countdown is finsihed
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("timer").innerHTML = "Successfully planted your tree!";
                }
            }, 1000);
    }


    render() {
        let m = this.props.minutes;
        this.startTimer(m);
        
        return (
            <div>
                <p id="timer"></p>
            </div>
        );

    }
}

export default Timer;