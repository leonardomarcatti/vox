<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TasksModel extends Model
{
    protected $fillable = ['title', 'description', 'id_user', 'id_status'];
    protected $table = 'Tasks';

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(StatusModel::class);
    }

}
