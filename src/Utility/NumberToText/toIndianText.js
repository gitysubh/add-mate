//This function is used for Indian conversion only
function toIndianText(num,isCurrency){
    var Gn = Math.floor(num / 10000000);  /* Crore */
    num -= Gn * 10000000;
    var kn = Math.floor(num / 100000);     /* lakhs */
    num -= kn * 100000;
    var Hn = Math.floor(num / 1000);      /* thousand */
    num -= Hn * 1000;
    var Dn = Math.floor(num / 100);       /* Tens (deca) */
    num = num % 100;               /* Ones */
    var tn= Math.floor(num / 10);
    var one=Math.floor(num % 10);

    var res = "";

    if (Gn>0)
    {
        res += (toIndianText(Gn) + " Crore");
    }
    if (kn>0)
    {
        res += (((res==="") ? "" : " ") +
            toIndianText(kn) + " Lakh");
    }
    if (Hn>0)
    {
        res += (((res==="") ? "" : " ") +
            toIndianText(Hn) + " Thousand");
    }

    if (Dn)
    {
        res += (((res==="") ? "" : " ") +
            toIndianText(Dn) + " Hundred");
    }


    var ones = Array("", "One", "Two", "Three", "Four", "Five", "Six","Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen","Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen","Nineteen");
    var tens = Array("", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty","Seventy", "Eighty", "Ninety");

    if (tn>0 || one>0)
    {
        if(isCurrency)
        {
            if (!(res===""))
                res += " And ";
        }

        if (!(res===""))
            res += " ";

        if (tn < 2)
        {
            res += ones[tn * 10 + one];
        }
        else
        {

            res += tens[tn];
            if (one>0)
            {
                res += ("-" + ones[one]);
            }
        }
    }

    if (res==="")
    {
        res = "Zero";
    }
    return res;

}

module.exports = toIndianText;