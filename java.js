
function shbtn(){
    document.getElementById('btn').style.border=" 2px solid black"
    document.getElementById('btn').style.color="black"
    document.getElementById('btn').style.cursor="pointer"
    var a = false;
    if(a){
        document.getElementById('btn').setAttribute("onclick","goo()")
        a=false
    }
    else{
        document.getElementById('btn').setAttribute("onclick","go()")
        a=true
    }
    if(document.form1.txt.value===""){
        document.getElementById('btn').style.border=" 2px solid rgb(231, 231, 231)"
        document.getElementById('btn').style.color="rgb(231, 231, 231)"
        document.getElementById('btn').style.cursor="not-allowed"
        var b = true
        if(b){
            document.getElementById('btn').setAttribute("onclick","goo()")
            a=true
        }
        else{
            document.getElementById('btn').setAttribute("onclick","go()")
            a=false
        }
    }
}
function go(){
    let q = "+20"
    let w = q + document.form1.txt.value;
    if(document.form1.txt.value.length < 10){
            document.getElementById('f1').style.display="none"
            document.getElementById('f2').style.display="inline-block"
            document.getElementById('message').innerHTML="ERROR..!"
            return
        }
    var k =false
    if(k){
        document.getElementById('btn').setAttribute("href","#")
        k=false
    }
    else{
        document.getElementById('btn').setAttribute("href",`https://wa.me/${w}`)
        k=true
    }
}

