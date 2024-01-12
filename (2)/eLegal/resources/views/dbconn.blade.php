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
                                
                echo "connected successfully to database ".$conn->query("SELECT DATABASE()")->fetchColumn() . PHP_EOL;
                echo "<br>";

                /* // fetch data using eloquent query
                $id = 1; // replace with the actual value of the id
                $post = DB::table('cases')
                        ->where('caseID', 'caseDesc', 'caseStatus', 'assignedTo')
                        ->whereRaw('caseID ='.$id)
                        ->first();
                        
                // to print fetched data
                if($cases){
                    echo "Fetched data from 'cases' table: ". PHP_EOL;
                    echo "caseId: " . $cases->caseID . PHP_EOL;
                    echo "caseDesc: " . $cases->caseDesc . PHP_EOL;
                    echo "caseStatus: " . $cases->caseStatus . PHP_EOL;
                    echo "assignedTo: " . $cases->assignedTo . PHP_EOL;
                }
                else{
                    echo "no data found";
                } */

                // to fetch query & print w/o eloquent
                $query = "SELECT * FROM cases";
                $result = $conn->query($query);

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