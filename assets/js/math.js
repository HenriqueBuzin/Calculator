$(document).ready(function() {
    function calc(circuit, variable, components) {
        if(circuit == "boost" && variable == "d") {
            // D = Vi / -Vo
            console.log("A");
        }else if(circuit == "boost" && variable == "r"){
            // R = Vo / Io
            console.log("B");
        }else if(circuit == "boost" && variable == "l"){
            // L = (Vi . D) / (ΔIl . F)
            console.log("C");
        }else if(circuit == "boost" && variable == "c"){
            // C = (D . Io) / (F . ΔVo)
            console.log("D");
        }else if(circuit == "buck" && variable == "d"){
            // D = Vo . Vi
            console.log("E");
        }else if(circuit == "buck" && variable == "l"){
            // L = (1 - D) . Vo / (ΔIl . F)
            console.log("F");
        }else if(circuit == "buck" && variable == "c"){
            // C = (1 - D) . Vo / (8 . L . Kc)
            console.log("G");
        }else if(circuit == "buck" && variable == "r"){
            // R = Vo / Io
            console.log("sH");
        }
    }
    $(".calc").submit(function(e) {
        e.preventDefault();
        var components = [];
        var circuit = $(this).data("circuit");
        var variable = $(this).data("variable");
        var valid = false;
        $(this).find("input").each(function() {
            components.push($(this).val());
            var id = "#" + $(this).attr("id");
            if(!$(this).val()){
                $(id).css("border-color", "#d44950");
                valid = false;
            }else{
                $(id).css("border-color", "initial");
                valid = true;
            }
        });
        if(valid) {
            console.log(circuit);
            console.log(variable);
            console.log(components);
            calc(circuit, variable, components);   
        }
    });
});