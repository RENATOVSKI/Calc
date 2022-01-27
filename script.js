function insert(number)
{
    var num = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number  + num;
}
function clean()
{
   document.getElementById('result').innerHTML = "";
}

function back()
{
    var erase = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = erase.substring(0, erase.length -1);
}

function equal()
{
    var result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result);
    }
    else
    {
        document.getElementById('resultado').innerHTML = ""
    }
}