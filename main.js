let randomSon = Math.floor(Math.random() * 100)

alert("Random orqali chiqqan son bu :" + randomSon)

if (randomSon % 3 == 0) {
    alert(randomSon + "fizz")
}else if (randomSon % 5 == 0) {
    alert(randomSon + "buzz")
}else if (randomSon % 3 == 0 && randomSon % 5 == 0) {
    alert(+ "Bu son fizzbuzz" )
}else{
    alert("bu buz ,fizz ,buzzfizz ham emas");
}