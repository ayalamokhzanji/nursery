<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public function toArray($request)
    {

        return [
            
            'id' => $this->id,
            'name' => $this->name,
            'phone_1' => $this->phone_1,
            'phone_2' => $this->phone_2,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'token'=> $this->token

        ];
    }
}
