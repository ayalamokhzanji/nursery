<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Parents;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Http\Requests\ParentsRequest;
use App\Http\Resources\ParentsResource;
use Illuminate\Support\Facades\Redirect;

class ParentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $parents = Parents::withTrashed()->paginate(10);
    
        return Inertia::render('Parents/index', [
            'Parents' =>  ParentsResource::collection($parents),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
        return Inertia::render('Parents/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ParentsRequest $request)
    {
        
        $input = $request->all();
        $parentsformation = Parents::create($input);
        return Redirect::route('parents.index')->with('success', 'Parents created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Parents  $parents
     * @return \Illuminate\Http\Response
     */
    public function show(Parents $parents)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Parents  $parents
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $parents = Parents::findOrFail($id);

        return Inertia::render('Parents/edit', [
            'parents' =>   new ParentsResource($parents),
      
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Parents  $parents
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id )
    {
        $input = $request->all();
        $parents = Parents::findOrFail($id);
        $parents->update($input);
            return Redirect::route('parents.index')->with('success', 'Parents updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Parents  $parents
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
     
        $parents = Parents::where('id', $id)->delete();
    
        return Redirect::route('parents.index');
        
    }
    
    public function restore($id)
    {
       
        $companyUsers = Parents::withTrashed()->find($id)->restore();

        return Redirect::route('parents.index');
    }
}
