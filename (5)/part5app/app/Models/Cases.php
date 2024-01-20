<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cases extends Model
{
    use HasFactory;

    protected $table = "case";
    protected $fillable = ["caseDescription","caseStatus","caseAddedDate","caseDueDate","caseDueDate","courtHearingDate"];
    protected $primaryKey = "caseID";
}
