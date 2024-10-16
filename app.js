// ARRAYS AND OBJECT WORKS

var samsung = [
    {
        samPro1: "Samsung Galaxy S23 Ultra ",
        samPro1Pri: 80000,
        samPro1Qty: 50,
        // samPro1Sale: samPro1Pri * samPro1Qty
    },
    {
samPro2 : "Samsung Galaxy Tab S9",
samPro2Pri : 75000 ,
samPro2Qty: 65,
// samPro2Sale: samPro2Pri * samPro2Qty

    },
    {
        samPro3 : "Samsung Galaxy Watch5",
        samPro3Pri : 35000 ,
        samPro3Qty: 91,
        // samPro3Sale: samPro3Pri * samPro3Qty  
    }

]

var vivo = [
    {
        vivoPro1: "Vivo X80 Pro",
        vivoPro1Pri: 55000,
        vivoPro1Qty: 52,
        // vivoPro1Sale: vivoPro1Pri * vivoPro1Qty
    },
    {
vivoPro2 : "Vivo Y21",
vivoPro2Pri : 78000 ,
vivoPro2Qty: 75,
// vivoPro2Sale: vivoPro2Pri * vivoPro2Qty

    },
    {
        vivoPro3 : "Vivo TWS 2 Earbuds",
        vivoPro3Pri : 72000 ,
        vivoPro3Qty: 81,
        // vivoPro3Sale: vivoPro3Pri * vivoPro3Qty  
    }

]


var oppo = [
    {
        oppoPro1: "Oppo Find X5 Pro",
        oppoPro1Pri: 57000,
        oppoPro1Qty: 42,
        // oppoPro1Sale: oppoPro1Pri * oppoPro1Qty
    },
    {
oppoPro2 : "Oppo Reno 8 Pro",
oppoPro2Pri : 83000 ,
oppoPro2Qty: 65,
// oppoPro2Sale: oppoPro2Pri * oppoPro2Qty

    },
    {
        oppoPro3 : "Oppo A96",
        oppoPro3Pri : 62000 ,
        oppoPro3Qty: 54,
        // oppoPro3Sale: oppoPro3Pri * oppoPro3Qty  
    }

]


var tecno = [
    {
        tecnoPro1: "Tecno Camon 20 Premier",
        tecnoPro1Pri: 45000,
        tecnoPro1Qty: 92,
        // tecnoPro1Sale: tecnoPro1Pri * tecnoPro1Qty
    },
    {
tecnoPro2 : "Tecno Spark 9 Pro",
tecnoPro2Pri : 50000 ,
tecnoPro2Qty: 85,
// tecnoPro2Sale: tecnoPro2Pri * tecnoPro2Qty

    },
    {
        tecnoPro3 : "Tecno Pova 5G",
        tecnoPro3Pri : 55000 ,
        tecnoPro3Qty: 74,
        // tecnoPro3Sale: tecnoPro3Pri * tecnoPro3Qty  
    }

]
console.log(tecno[2].tecnoPro3)

// FUNCTION WORK 

function samsungF(){

    var samPro1Sale =samsung[0].samPro1Pri *samsung[0].samPro1Qty
    var samPro2Sale =samsung[1].samPro2Pri *samsung[1].samPro2Qty
   var samPro3Sale =samsung[2].samPro3Pri *samsung[2].samPro3Qty
document.getElementById("data").innerHTML = `
<br><br>
<h1><u>SAMSUNG</u></h1>
<br><br>
 <tr class="animate__animated animate__backInDown">
<th>S.No</th>
<th>Product Name</th>
<th>Product Price</th>
<th>Product Qty.</th>
<th>Product Sale</th>
    </tr>
  <tr class="animate__animated animate__backInDown">
<td>1</td>
<td>${samsung[0].samPro1}</td>
<td>${samsung[0].samPro1Pri}</td>
<td>${samsung[0].samPro1Qty}</td>
<td>${samPro1Sale}</td>
    </tr>  
<tr class="animate__animated animate__backInDown">
<td>2</td>
<td>${samsung[1].samPro2}</td>
<td>${samsung[1].samPro2Pri}</td>
<td>${samsung[1].samPro2Qty}</td>
<td>${samPro2Sale}</td>
    </tr >  
    <tr class="animate__animated animate__backInDown">
<td>3</td>
<td>${samsung[2].samPro3}</td>
<td>${samsung[2].samPro3Pri}</td>
<td>${samsung[2].samPro3Qty}</td>
<td>${samPro3Sale}</td>
    </tr>  
`
} 

// FOR VIVO 

function vivoF(){

    var vivoPro1Sale =vivo[0].vivoPro1Pri *vivo[0].vivoPro1Qty
    var vivoPro2Sale =vivo[1].vivoPro2Pri *vivo[1].vivoPro2Qty
   var vivoPro3Sale =vivo[2].vivoPro3Pri *vivo[2].vivoPro3Qty
document.getElementById("data").innerHTML = `
<br><br>
<h1><u>VIVO</u></h1>
<br><br>
 <tr class="animate__animated animate__backInDown">
<th>S.No</th>
<th>Product Name</th>
<th>Product Price</th>
<th>Product Qty.</th>
<th>Product Sale</th>
    </tr>
  <tr class="animate__animated animate__backInDown">
<td>1</td>
<td>${vivo[0].vivoPro1}</td>
<td>${vivo[0].vivoPro1Pri}</td>
<td>${vivo[0].vivoPro1Qty}</td>
<td>${vivoPro1Sale}</td>
    </tr>  
<tr class="animate__animated animate__backInDown">
<td>2</td>
<td>${vivo[1].vivoPro2}</td>
<td>${vivo[1].vivoPro2Pri}</td>
<td>${vivo[1].vivoPro2Qty}</td>
<td>${vivoPro2Sale}</td>
    </tr>  
    <tr class="animate__animated animate__backInDown">
<td>3</td>
<td>${vivo[2].vivoPro3}</td>
<td>${vivo[2].vivoPro3Pri}</td>
<td>${vivo[2].vivoPro3Qty}</td>
<td>${vivoPro3Sale}</td>
    </tr>  
`
} 

// FOR OPPO

function oppoF(){

    var oppoPro1Sale =oppo[0].oppoPro1Pri *oppo[0].oppoPro1Qty
    var oppoPro2Sale =oppo[1].oppoPro2Pri *oppo[1].oppoPro2Qty
    var oppoPro3Sale =oppo[2].oppoPro3Pri *oppo[2].oppoPro3Qty
document.getElementById("data").innerHTML = `
<br><br>
<h1><u>OPPO</u></h1>
<br><br>
<tr class="animate__animated animate__backInDown">
<th>S.No</th>
<th>Product Name</th>
<th>Product Price</th>
<th>Product Qty.</th>
<th>Product Sale</th>
    </tr>
  <tr class="animate__animated animate__backInDown">
<td>1</td>
<td>${oppo[0].oppoPro1}</td>
<td>${oppo[0].oppoPro1Pri}</td>
<td>${oppo[0].oppoPro1Qty}</td>
<td>${oppoPro1Sale}</td>
    </tr>  
<tr class="animate__animated animate__backInDown">
<td>2</td>
<td>${oppo[1].oppoPro2}</td>
<td>${oppo[1].oppoPro2Pri}</td>
<td>${oppo[1].oppoPro2Qty}</td>
<td>${oppoPro2Sale}</td>
    </tr>  
    <tr class="animate__animated animate__backInDown">
<td>3</td>
<td>${oppo[2].oppoPro3}</td>
<td>${oppo[2].oppoPro3Pri}</td>
<td>${oppo[2].oppoPro3Qty}</td>
<td>${oppoPro3Sale}</td>
    </tr>  
`
}
// FOR TECNO

function tecnoF(){

    var tecnoPro1Sale =tecno[0].tecnoPro1Pri *tecno[0].tecnoPro1Qty
    var tecnoPro2Sale =tecno[1].tecnoPro2Pri *tecno[1].tecnoPro2Qty
    var tecnoPro3Sale =tecno[2].tecnoPro3Pri *tecno[2].tecnoPro3Qty
document.getElementById("data").innerHTML = `
<br><br>
<h1><u>TECNO</u></h1>
<br><br> 
<tr class="animate__animated animate__backInDown">
<th>S.No</th>
<th>Product Name</th>
<th>Product Price</th>
<th>Product Qty.</th>
<th>Product Sale</th>
    </tr>
  <tr class="animate__animated animate__backInDown">
<td>1</td>
<td>${tecno[0].tecnoPro1}</td>
<td>${tecno[0].tecnoPro1Pri}</td>
<td>${tecno[0].tecnoPro1Qty}</td>
<td>${tecnoPro1Sale}</td>
    </tr>  
<tr class="animate__animated animate__backInDown">
<td>2</td>
<td>${tecno[1].tecnoPro2}</td>
<td>${tecno[1].tecnoPro2Pri}</td>
<td>${tecno[1].tecnoPro2Qty}</td>
<td>${tecnoPro2Sale}</td>
    </tr>  
    <tr class="animate__animated animate__backInDown">
<td>3</td>
<td>${tecno[2].tecnoPro3}</td>
<td>${tecno[2].tecnoPro3Pri}</td>
<td>${tecno[2].tecnoPro3Qty}</td>
<td>${tecnoPro3Sale}</td>
    </tr>  
`
} 
