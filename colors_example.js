function hsl_col_perc(percent,start,end) {

     var a = percent/100,
     b = end*a;
     c = b+start;

    //Return a CSS HSL string
    return 'hsl('+c+',100%,50%)';
}


//Change me!
var percent = 10;

$('#progress').css('background-color',hsl_col_perc(percent,0,120));//Green -> Red
