import React from 'react'

export function MovieGrid({data}) {

    const {backdrop_path,original_title, overview,vote_average }= data;
    
    
    return (
       
    <div class="rounded overflow-hidden shadow-lg" >
            <img class="w-full" src={"https://image.tmdb.org/t/p/w300"+backdrop_path} alt="Mountain" />
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{original_title}</div>
            <p class="text-gray-700 text-base">
                {overview}
            </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Votacion</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{vote_average}</span>
            
            
            </div>
    </div>
    )
}
