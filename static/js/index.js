$(document).ready(function(){
    $("#Add").on("click",function(){
        var count = $("#questiondiv").find("*").length;
        count =  Math.floor(count/27) + 1;
        const element = `
            <br>
            <div class="question_head">
                <h3 contenteditable="true" style='margin: auto;'>Subject ${count}:</h3>
            </div>
            <br>
            <div class='row d-flex justify-content-center'>
                <label for="grade">Grade: </label>
                &nbsp;&nbsp;
                <select name="grade" id="grade" style='width: 13%; align:center;'>
                    <option value="" disabled selected>Select your Grade</option>
                    <option value = "10">O</option>
                    <option value = "9">A+</option>
                    <option value = "8">A</option>
                    <option value = "7">B+</option>
                    <option value = "6">B</option>
                    <option value = "5">C</option>
                    <option value = "0">RA</option>
                </select>
                &nbsp;&nbsp;
                <label for="credits">Credits: </label>
                &nbsp;&nbsp;
                <select name="credit" id="credit" style='width:13%; align:center;'>
                    <option value="" disabled selected>Select the Credit</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>`

        $("#questiondiv").append(element);
        var questionDiv = document.getElementById("questiondiv");
        window.scrollTo(0,questionDiv.scrollHeight);
        console.log(questionDiv.scrollTop,questionDiv.scrollHeight);
    });

    $("#Remove").on("click",function(){
        $("#questiondiv").children().last().remove();
        $("#questiondiv").children().last().remove();
        $("#questiondiv").children().last().remove();
        $("#questiondiv").children().last().remove();
    });

    $("#Submit").on("click",function(){
        if ($("#questiondiv").find("*").length)
        {
            const question = [];

            $("#questiondiv :selected").each(function(e){
                question.push(this.value);
            });

            if (!question.includes(''))
            {
                document.getElementById("resultdiv").setAttribute("hidden",false);
                document.getElementById("loading").removeAttribute("hidden");
                window.scrollTo(0,document.body.scrollHeight);

                $.ajax({
                    data:{
                        ques:JSON.stringify(question),
                    },
                    type:"POST",
                    url:"/submit",
                }).done(function(data){
                    result = data;
                    document.getElementById("result").innerHTML = result ;
                    document.getElementById("loading").setAttribute("hidden",false);
                document.getElementById("resultdiv").removeAttribute("hidden");
                });
            }
            else{
                document.getElementById("resultdiv").setAttribute("hidden",false);
            }
        }
        else{
            document.getElementById("resultdiv").setAttribute("hidden",false);
        }
    });
});