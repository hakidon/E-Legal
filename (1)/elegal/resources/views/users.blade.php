<!-- resources/views/users/index.blade.php -->

<h1>All Users</h1>

@foreach ($users as $user)
    <p>{{ $user->username }}</p>
@endforeach
