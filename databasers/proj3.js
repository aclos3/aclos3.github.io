

function navClick() {
  var x = document.getElementById("homenav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

function showResults() {
    if(document.getElementById("custResults"))
    {
      document.getElementById("custResults").innerHTML ="<table><tr><th>select</th><th class=\"pk\">customerId</th><th>email</th><th>memberSince</th><th>firstName</th><th>lastName</th></tr><tr><th><input type=\"checkbox\" name=\"check1\"></th><td>346</td><td>name@name.com</td><td>3/15/2002</td><td>Bob</td><td>Saget</td></tr><tr><th><input type=\"checkbox\" name=\"check2\"></th><td>211</td><td>name2@name.com</td><td>2/29/2013</td><td>Lucy</td><td>Smith</td></tr></table><p><button onclick=\"hideResults();\">Delete Customer</button></p>";
    }
    else if(document.getElementById("empResults"))
    {
      document.getElementById("empResults").innerHTML ="<table><tr><th>select</th><th class=\"pk\">employeeId</th><th>firstName</th><th>lastName</th><th>storeId</th><th>title</th><th>startTime</th><th>stopTime</th><th>hourlyRate</th><th>partTime</th></tr><tr><th><input type=\"checkbox\" name=\"check1\"></th><td>7</td><td>Bob</td><td>Smith</td><td>2</td><td>store manager</td><td>8:00am</td><td>5:00pm</td><td>$23</td><td>False</td></tr><tr><th><input type=\"checkbox\" name=\"check2\"></th><td>13</td><td>Kelsey</td><td>Rogers</td><td>1</td><td>sales associate</td><td>10:00am</td><td>2:00pm</td><td>$15</td><td>True</td></tr></table><p><button onclick=\"hideResults();\">Delete Employee</button></p>";
    }
    else if(document.getElementById("salResults"))
    {
      document.getElementById("salResults").innerHTML ="<fieldset><legend>Table: Sales</legend><table><tr><th>select</th><th class=\"pk\">saleId</th><th class=\"fk\">employeeId</th><th class=\"fk\">customerId</th><th>transactionDate</th><th>totalPurchase</th></tr><tr><th><input type=\"checkbox\" name=\"check1\"></th><td>1</td><td>14</td><td>245</td><td>8/18/2019</td><td>$47.24</td></tr><tr><th><input type=\"checkbox\" name=\"check2\"></th><td>23</td><td>14</td><td>112</td><td>12/22/2019</td><td>$58.98</td></tr></table></fieldset><fieldset ><legend>Table: Sales_Products</legend><table><tr><th class=\"pk\">saleId</th><th class=\"pk\">productId</th><th>number(quantity of the product that were part of the sale)</th></tr><tr><td>1</td><td>14</td><td>2</td></tr><tr><td>1</td><td>2</td><td>1</td></tr><tr><td>1</td><td>5</td><td>1</td></tr><tr><td>23</td><td>2</td><td>3</td></tr></table></fieldset><p><button onclick=\"hideResults();\">Delete Sale</button></p>";
    }
    else if(document.getElementById("prodResults"))
    {
      document.getElementById("prodResults").innerHTML ="<fieldset><legend>Table: Products</legend><table><tr><th>select</th><th class=\"pk\">productId</th><th>name</th><th>price</th></tr><!-- <tr><th><input type=\"checkbox\" name=\"check1\"></th><td>1</td><td>Yellow Tang</td><td>29.99</td></tr> --><tr><th><input type=\"checkbox\" name=\"check2\"></th><td>2</td><td>Maroon Clownfish</td><td>19.99</td></tr></table></fieldset><br><fieldset ><legend>Table: Sales_Products</legend><table><tr><th class=\"pk\">saleId</th><th class=\"pk\">productId</th><th>number(quantity of the product that were part of the sale)</th></tr><tr><td>23</td><td>2</td><td>4</td></tr><tr><td>11</td><td>2</td><td>2</td></tr><tr><td>26</td><td>2</td><td>1</td></tr><tr><td>452</td><td>2</td><td>7</td></tr></table></fieldset><p><button onclick=\"hideResults();\">Delete Products</button></p>";
    }
}

function hideResults() {
  if(document.getElementById("custResults"))
  {
    document.getElementById("custResults").innerHTML ="";
  }
  else if(document.getElementById("empResults"))
  {
    document.getElementById("empResults").innerHTML ="";
  }
  else if(document.getElementById("salResults"))
  {
    document.getElementById("salResults").innerHTML ="";
  }
  else if(document.getElementById("prodResults"))
  {
    document.getElementById("prodResults").innerHTML ="";
  }
}

function confirmCust(){ 
    document.getElementById("custTy").innerHTML ="New Customer Added!";
}

function confirmEmp() {
    document.getElementById("empTy").innerHTML ="New Employee Added!";
}

function confirmSal() {
  document.getElementById("salTy").innerHTML ="New Sale Added!";
}
    
function confirmProd() {
  document.getElementById("prodTy").innerHTML ="New Product Added!";
}

function showProds() {
  var numProds = document.getElementById("numProds").value;
  var sales_prods_str = "<fieldset>";

  if (numProds > 100)
  {
    document.getElementById("salTy").innerHTML="Too many products! The system can only handle 100.";
  }
  else{
    for(i = 0; i < numProds; i++)
    {
      sales_prods_str +="<fieldset class=\"sales_prods\"><legend id=\"prod_num\">Product ";
      sales_prods_str += (i+1);
      sales_prods_str +=":</legend><p>Sale Id: 45</p><label>productId:<input type =\"number\" name =\"pID\"></label><br><br><label>quantity:<input type =\"number\" name =\"pID\"></label><br><br></fieldset>";
      
    }
    sales_prods_str = sales_prods_str + "<button onclick=\"prodEnt();return false;\">Submit</button><div id=\"sales_prod_ty\"></div>" + "</fieldset>";
    document.getElementById("sales_prods").innerHTML=sales_prods_str;
  
  }
  
}

function prodEnt() {
  document.getElementById("sales_prod_ty").innerHTML="Submission Confirmed";
}