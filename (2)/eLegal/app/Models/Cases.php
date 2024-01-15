<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cases extends Model
{
    use HasFactory;

    protected $table = 'cases';

    protected $fillable = [
        'caseID',
        'caseDesc',
        'caseStatus',
        'cAddDate',
        'cDueDate',
        'cHearingDate',
        'assignedTo',
    ];

    public function staff(){
        return $this->belongsTo(Staff::class, 'assignedTo', 'staffID');
    }

}

