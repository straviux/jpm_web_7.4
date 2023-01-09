<?php

namespace App\Http\Controllers;

use App\Models\AuthoredBill;
use App\Http\Requests\StoreAuthoredBillRequest;
use App\Http\Requests\UpdateAuthoredBillRequest;
use App\Http\Resources\AuthoredBillResource;
use Illuminate\Http\Request;


class AuthoredBillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //

        $page_count = $request['pageCount'] > 0 ? $request['pageCount'] : '';


        $status = $request['status'];

        $search_hb = $request['search'];

        return AuthoredBillResource::collection(AuthoredBill::when($search_hb, function ($query, $search_hb) {
            return $query->where('hb_no', 'like', '%' . $search_hb . '%');
        })->orderBy('hb_no', 'ASC')->paginate($page_count));
    }

    public function showPublic(Request $request)
    {
        $is_pa = $request['is_pa'];
        return AuthoredBillResource::collection(AuthoredBill::where('is_pa', $is_pa)->orderBy('hb_no', 'ASC')->paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAuthoredBillRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAuthoredBillRequest $request)
    {
        //
        $data = $request->validated();


        $authoredbill = AuthoredBill::create($data);

        return new AuthoredBillResource($authoredbill);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AuthoredBill  $authoredbill
     * @return \Illuminate\Http\Response
     */
    public function show(AuthoredBill $authoredbill)
    {
        //
        return new AuthoredBillResource($authoredbill);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAuthoredBillRequest  $request
     * @param  \App\Models\AuthoredBill $authoredbill
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAuthoredBillRequest $request, AuthoredBill $authoredbill)
    {
        //
        $data = $request->validated();

        // Update article in the database
        $authoredbill->update($data);
        return new AuthoredBillResource($authoredbill);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AuthoredBill  $authoredbill
     * @return \Illuminate\Http\Response
     */
    public function destroy(AuthoredBill $authoredbill, Request $request)
    {
        //
        $user = $request->user();
        // if (!$user->id !== $authoredbill->user_id) {
        if (!$user->id) {
            return abort(403, 'Unauthorized action');
        }

        $authoredbill->delete();
        return response('', 204);
    }
}
