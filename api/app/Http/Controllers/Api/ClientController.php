<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Client;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::all();
        return $clients;

    }

    public function store(Request $request)
    {
        $client = new Client();
        $client->code = $request->code;
        $client->name = $request->name;
        $client->lastName = $request->lastName;


        $client->save();
    }

    public function show($id)
    {
        $client = Client::find($id);
        return $client;
    }

    public function update(Request $request, $id)
    {
        $client = Client::findOrFail($request->id);
        $client->code = $request->code;
        $client->name = $request->name;
        $client->lastName = $request->lastName;

        $client->save();
        return $client;
    }

    public function destroy($id)
    {
        $client = Client::destroy($id);
        return $client;
    }
}
