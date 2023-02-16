import React from 'react'

export default function MovieCard({name,date,imageUrl,description,setX,select}) {

const handler = (i) => {
   alert(i);
}
    return (
        <div className="flex justify-center py-4 w-11/12">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img onClick={handler} className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={imageUrl} alt="No Images" />
                <div className="p-6 flex flex-col justify-start">
                    <h5  className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p dangerouslySetInnerHTML={{__html: description}} className="text-gray-700 text-base mb-4">
                        
                    </p>
                    <p className="text-2xs text-blue-500">{date}</p>
                    <button onClick={select} className="flex cursor-pointer ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">View Summary</button>
                </div>
            </div>
        </div>
    )
}
