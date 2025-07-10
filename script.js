//let expn = document.getElementById("expression")
let btn = document.querySelectorAll(".btn")
let texta = document.getElementsByTagName("textarea")[0]
let lastans = ""

btn.forEach( button => {
    button.addEventListener("click",() => {
        const value = button.textContent

        if(value === "=")
        {
            try {
                const result = math.evaluate(texta.value)
                texta.value = result;
                lastans = result;
            }
            catch (err)
            {
                texta.style.color = 'red';
                texta.value = "Hey I caught an Error!";
            }
        }

        else if(value === "AC")
        {
            texta.value = "";
        }
        else if(value === "Del")
        {
            texta.value = texta.value.slice(0 , -1)
        }
        else if(value === "Ans")
        {
            texta.value += lastans;
        }
        else if(value === "π")
        {
           // const π = "pi"
            texta.value += "pi"
        }
        else if(value === "sqrt" )
        {
            texta.value += "sqrt("
        }
        else if (value === "log")
        {
            texta.value += "log10("
        }
        else if (value === "sin")
        {
            texta.value += "sin("
        }
        else if (value === "cos")
        {
            texta.value += "cos("
        }
        else if (value === "tan")
        {
            texta.value += "tan("
        }
        
        else
        {
            texta.value += value;
        }
    })
})