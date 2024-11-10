let ans = document.getElementsByClassName("answer");
let plus = document.getElementsByClassName("plus");
let minus = document.getElementsByClassName("minus");

for (let i = 0, j=0,k=0 ; i < ans.length, j<plus.length; i++, j++, k++) {
    ans[i].style.display = "none";
    minus[i].style.display = "none";
}


ans[0].style.display="inline-block";
minus[0].style.display="inline";
plus[0].style.display="none";

for(let i=0; i<ans.length; i++){

    plus[i].addEventListener("click", function(){
        ans[i].style.display = "inline-block";
        plus[i].style.display= "none";
        minus[i].style.display = "inline";
    });

    minus[i].addEventListener("click", function(){
        ans[i].style.display = "none";
        plus[i].style.display = "inline";
        minus[i].style.display = "none";
    });
}







