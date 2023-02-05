<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EmailsResource extends JsonResource
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
            'name' => $this->parent->main_guardian_name.$this->parent->secondary_guardian_name,
            'subject' => $this->subject,
            'content'=> $this->content,
            'created_at' => $this->created_at,
            'deleted_at'=> $this->deleted_at,
        ];
    }
}
