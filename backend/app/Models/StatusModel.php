<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class StatusModel extends Model
{
    protected $fillable = ['status'];
    protected $table = 'status';

    public function tasks(): HasMany
    {
        return $this->hasMany(TasksModel::class);
    }

    
}
