let userinput = document.getElementById('user-input');
let submit = document.getElementById('cal');
let output = document.getElementById('output');

    function calculate() {
        let number = Number(userinput.value);
        let outputHtml = '';

        if (number == '') {
            outputHtml += "<p> pls input your number  </p>";
            output.innerHTML = outputHtml;
        }
        else {
            for (let i = 1; i <= 12; i++) {
                outputHtml += '<p>';
                outputHtml += number + 'x' + i + '=' + (number * i);
                outputHtml += '</p>';
            }
            output.innerHTML = outputHtml;
        }
        
    }

    cal.addEventListener('click', calculate);