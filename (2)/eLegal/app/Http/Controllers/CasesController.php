<?php

namespace App\Http\Controllers;

use App\Models\Cases;
use Illuminate\Http\Request;

class CasesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $data = Cases::with('assignedTo')->get();
        $data = Cases::all();
        return view('frontend.case', ['case' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Cases $case)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cases $case)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cases $case)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cases $case)
    {
        //
    }
}
