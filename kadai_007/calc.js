//変数に整数を代入する
let num = 45

//変数numが３の倍数かつ５の倍数のとき「３の倍数で５の倍数です」と出力する
if(num % 3===0 && num % 5 ===0){
    console.log('３と５の倍数です');
}

//変数numが３の倍数の場合「３の倍数です」と出力する


else if (num % 3===0){
    console.log('３の倍数です');
}

//変数numが５の倍数の場合「５の倍数です」と出力する
else if(num % 5 ===0){
    console.log('５の倍数です');
}



//変数numが上記以外の場合変数を表示します
else{
    console.log(num);
}
