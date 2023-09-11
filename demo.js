function fact(n) {
    if(n==0 || n===1){
        return 1;
    }
    else if(n<0){
        return 0;
    }
    else{
        return (n*fact(n-1));
    }
}
function fun() {
    let x = document.getElementById("num").value;
    document.getElementsByClassName("res")[0].innerHTML = "Factorial of the number is "+fact(x);

}