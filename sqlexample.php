<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<link rel="icon" href="img/icon.png">
<script>

    $("#myForm").submit(function(event){
        event.preventDefault(); //prevent default action
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = new FormData(this); //Creates new FormData object
        
        $.ajax({
            url : post_url,
            type: request_method,
            data : form_data,
            contentType: false,
            cache: false,
            processData:false
        }).done(function(response){ //
            $("#server-results").html(response);
        });
    });

</script>
</head>


<?php

$link = mysql_connect('nameOfDababase', 'user', 'password'); 
if (!$link) { 
    die('Could not connect: ' . mysql_error());
}
mysql_select_db(database_1);

    if ( $_POST ) {

        $name = $_POST['name1'];
        $horsepower = $_POST['horsepower1'];
        $torque = $_POST['torque1'];
        $zerotosixty = $_POST['zerotosixty1'];
        $quartermile = $_POST['quartermile1'];
        $msrp = $_POST['msrp1'];

        mysql_query("INSERT INTO cars VALUES ('', '$name', '$horsepower', '$torque', '$zerotosixty', '$quartermile', '$msrp')") or die("Could not insert into database");
   
    }

   $result = mysql_query("SELECT * FROM cars");


?>

<body>
  <h1 align="center">Car Acceleration Table</h1>
<br>
<br>



<div class="container">
  <form action="sqlexample.php" method="post" id="myForm" class="form-horizontal" role="form">
    <div class="form-group">
      <label class="control-label col-sm-2">Name : </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" name="name1" placeholder="Enter the Name of the Car">
      </div>
    </div>
  <div class="form-group">
      <label class="control-label col-sm-2">Horsepower : </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" name="horsepower1" placeholder="Enter the Horsepower of the Car">
      </div>
    </div>
  <div class="form-group">
      <label class="control-label col-sm-2">Torque : </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" name="torque1" placeholder="Enter the Torque of the car">
      </div>
    </div>
  <div class="form-group">
      <label class="control-label col-sm-2">0-60 mph Acceleration Time: </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" name="zerotosixty1" placeholder="Enter the acceleration of the car">
      </div>
    </div>
  <div class="form-group">
      <label class="control-label col-sm-2">Quarter Mile Time:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" name="quartermile1" placeholder="Enter the quarter mile time of the car">
      </div>
    </div>
  <div class="form-group">
      <label class="control-label col-sm-2">MSRP :</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" name="msrp1" placeholder="Enter the MSRP of the car">
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <input type="submit" name="submit" value="Submit" />
      </div>
    </div>
  </form>
</div>


<div class="container">

  <div class="table-responsive">

<table class="table" style="width:100%"> 
            <thead> 
                <tr> 
                    <th class="header">Name</th> 
                    <th class="header">Horsepower</th>
                    <th class="header">Torque</th>
                    <th class="header">Zero to Sixy Time</th>
                    <th class="header">Quarter Mile Time</th> 
                    <th class="header">MSRP</th>
                </tr> 
            </thead> 

            <tbody>
      
      <?php while ($row = mysql_fetch_array($result)) { ?>

        <tr>   

          <td bgcolor="#D1FFC2"><?php echo $row["name"] ?></td>
          <td bgcolor="#D1FFC2"><?php echo $row["horsepower"] ?></td>
          <td bgcolor="#D1FFC2"><?php echo $row["torque"] ?></td>
          <td bgcolor="#D1FFC2"><?php echo $row["zerotosixty"] ?></td>
          <td bgcolor="#D1FFC2"><?php echo $row["quartermile"] ?></td>
          <td bgcolor="#D1FFC2"><?php echo $row["msrp"] ?></td>

        </tr>  

<?php } ?>    

            </tbody> 
            </table>
      
      </div>
</div>

</body>
</html>