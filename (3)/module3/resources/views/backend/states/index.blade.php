<h1>dashboard</h1>
<ul>
@foreach($states as $state)

 <li>appointments: {{ $state->appointments_number }} total cases: {{ $state->total_cases }} pending cases: {{ $state->pending_cases }}</li>


    @endforeach
    @foreach($tasks as $task)
    <li>task date: {{ $task->task_date }}
 task time: {{ $task->task_time }}
 task type: {{ $task->task_type }}
 task description: {{ $task->task_description}}</li>
 @endforeach

</ul>


