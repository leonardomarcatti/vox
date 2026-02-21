<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewTaskRequest;
use App\Models\TasksModel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\JsonResponse;

class MainController extends Controller
{
    public function home(): JsonResponse
    {
        $data['user'] = Auth::user();
        $data['tasks'] = DB::table('tasks')->select('*')->where('id_user', $data['user']['id']) ->get();
        return \response()->json($data);
    }

    public function newTask(NewTaskRequest $r) : JsonResponse
    {

        $result = DB::table('tasks')->insert([
            'title' => $r->title,
            'description' => $r->description,
            'id_user' => Auth::user()->id,
        ]);

        return \response()->json($result);
    }
}
