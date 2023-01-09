<?php

namespace App\Http\Controllers;

use App\Models\AuthoredBills;
use App\Http\Requests\StoreAuthoredBillsRequest;
use App\Http\Requests\UpdateAuthoredBillsRequest;

class AuthoredBillsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAuthoredBillsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAuthoredBillsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AuthoredBills  $authoredBills
     * @return \Illuminate\Http\Response
     */
    public function show(AuthoredBills $authoredBills)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAuthoredBillsRequest  $request
     * @param  \App\Models\AuthoredBills  $authoredBills
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAuthoredBillsRequest $request, AuthoredBills $authoredBills)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AuthoredBills  $authoredBills
     * @return \Illuminate\Http\Response
     */
    public function destroy(AuthoredBills $authoredBills)
    {
        //
    }
}
