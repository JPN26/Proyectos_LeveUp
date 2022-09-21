var contador = 0;

function suma() {
  contador ++;
  document.getElementById("numero").textContent = contador;
  if(contador==0)
  {
    document.getElementById("numero").style.color = "purple";
  }
  else if (contador>0)
  {
    document.getElementById("numero").style.color = "green";
  }
}
function resta() {
    contador --;
    document.getElementById("numero").textContent = contador;
    if(contador==0)
    {
      document.getElementById("numero").style.color = "purple";
    }
    else if (contador<0)
    {
      document.getElementById("numero").style.color = "red";
    }
  }
  function rest() {
    contador=0;
    document.getElementById("numero").textContent = contador;
    document.getElementById("numero").style.color = "purple";
  }