<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewTaskRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\JsonResponse;
use Illuminate\Http\Request;

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

    public function getTask(int|string $id)
    {
        $task = DB::table('tasks')->select('*')->where('id', $id)->get();
        return \response()->json(['task' => $task]);
    }

    public function editTask(Request $r): JsonResponse
    {
        $task = DB::table('tasks')->where('id', $r->id)->update(['title' => $r->title, 'description' => $r->description,]);
        return \response()->json($task);
    }
}
