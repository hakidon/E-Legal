<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dummy DB Connection</title>
</head>
<body>
    <div>
        <?php
            try{
                // to establish connection with database
                $conn = new PDO("mysql:host=localhost;dbname=dummy","root","");
                
                // to catch & hanlde db-related exceptions
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                // to fetch query
                $query = "SELECT * FROM cases";
                $result = $conn->query($query);
                
                // to print fetched data
                echo "connected successfully to database ".$conn->query("SELECT DATABASE()")->fetchColumn() . PHP_EOL;
                echo "<br>";
                foreach($result as $row){
                    echo $row['caseID']." ".$row['caseDesc']." ".$row['caseStatus']." ".$row['assignedTo']."<br>";
                }
                
            }
            catch(PDOException $e){
                echo "connection failed: ".$e->getMessage();
            }

            /* if(DB::connection()->getPdo()){
                echo "connected successfully to database ".DB::connection()->getDatabaseName();
            }
            else{
                echo "connection failed";
            } */
        ?>
    </div>
    
</body>
</html>