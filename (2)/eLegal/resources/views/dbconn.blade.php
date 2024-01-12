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
            if(DB::connection()->getPdo()){
                echo "connected successfully to database ".DB::connection()->getDatabaseName();
            }
            else{
                echo "connection failed";
            }
        ?>
    </div>
    
</body>
</html>