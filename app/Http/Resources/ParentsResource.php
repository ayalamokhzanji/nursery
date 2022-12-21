<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ParentsResource extends JsonResource
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
            'main_guardian_name' => $this->main_guardian_name,
            'main_guardian_phone' => $this->main_guardian_phone,
            'secondary_guardian_name' => $this->secondary_guardian_name,
            'secondary_guardian_phone' => $this->secondary_guardian_phone,
            'email'=> $this->email,
            'address'=> $this->address,
            'updated_at' => $this->updated_at,
            'created_at' => $this->created_at,
            'deleted_at'=> $this->deleted_at,
        ];
    }
}
