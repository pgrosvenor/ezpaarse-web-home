$(document).ready(function(){
    setTimeout(function(){
        setInterval(function(){
            var str1=$('#counter1').text();
            var curval1=Number(str1.replace(/\s/g,''));
            var str2=$('#counter2').text();
            var curval2=Number(str2.replace(/\s/g,''));
            var str3=$('#counter3').text();
            var curval3=Number(str3.replace(/\s/g,''));
            var str4=$('#counter4').text();
            var curval4=Number(str4.replace(/\s/g,''));
            var str5=$('#counter5').text();
            var curval5=Number(str5.replace(/\s/g,''));
            var str6=$('#counter6').text();
            var curval6=Number(str6.replace(/\s/g,''));
            if(curval1<=14650855){
                $('#counter1').text((curval1+10139).toLocaleString());
            }
            if(curval2<=841){
                $('#counter2').text((curval2+1).toLocaleString());
            }
            if(curval3<=20){
                $('#counter3').text((curval3+1).toLocaleString());
            }
            if(curval4<=62400){
                $('#counter4').text((curval4+48).toLocaleString());
            }
            if(curval5<=202){
                $('#counter5').text((curval5+1).toLocaleString());
            }
            if(curval6<=58){
                $('#counter6').text((curval6+1).toLocaleString());
            }
        }, 2);

    }, 500);
});
