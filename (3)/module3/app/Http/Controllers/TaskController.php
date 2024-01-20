<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\task;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    //
    public function getTasksByMonth()
    {
        $tasksByMonth = Task::select(DB::raw('MONTH(task_date) as month'), DB::raw('YEAR(task_date) as year'))
            ->groupBy('year', 'month')
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->get();

        // Include tasks for each month
        foreach ($tasksByMonth as $month) {
            $month->tasks = Task::whereYear('task_date', $month->year)
                ->whereMonth('task_date', $month->month)
                ->get();
        }

        return response()->json(['tasksByMonth' => $tasksByMonth]);
    }
    
    public function getTaskCount()
    {
        $taskCount = Task::count();

        return response()->json(['taskCount' => $taskCount]);
    }


}
