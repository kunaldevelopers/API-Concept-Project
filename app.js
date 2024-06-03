let url = "https://icanhazdadjoke.com/";
let btn = document.querySelector("button");
let resetBtn = document.getElementById("reset");
let div = document.querySelector("div");

async function getJokes(){
    try {
        const config = {headers : {Accept : "text/plain"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch (error) {
        console.log(`Error was : ${error}`);
    }
}

// Random Color Generating
function randNum(){
    let num = Math.floor(Math.random()*255)+1;
    return num;
}

function RandColor(){
    let color = `rgb(${randNum()},${randNum()},${randNum()})`
    return color;
}


btn.addEventListener("click", ()=>{
    console.log("Button Clicked!!");
    let n = prompt("How Many Jokes You Want, Enter In Numbers Only!!");
    if (isNaN(n)){
        alert("Invalid Input, Enter Correct Number!!");
    }else{
        console.log(`Input Accepted, The Input is ${n}`);
    }

    for(let i =1; i<=n; i++){
        async function getJokes(){
            try {
                const config = {headers : {Accept : "text/plain"}};
                let res = await axios.get(url, config);
                console.log(res.data);

                let para = document.createElement("p");
                para.innerHTML = para.innerHTML + res.data + "<br><br>";
                div.append(para);
                para.style.color=RandColor();
                para.style.backgroundColor=RandColor();
            } catch (error) {
                console.log(`Error was : ${error}`);
            }
        }
        getJokes();
    }
})

resetBtn.addEventListener("click", ()=>{
    console.log("Reset Button Clicked!!");
    window.location.reload();
});


