import React from 'react';

const playersData = [
    
        {
          id: 1,
          name: "Kirkland",
          age: 1,
          sports: "consequat varius",
          city: "Banjar Kampungbugis",
          gender: "Male"
        },
        {
          id: 2,
          name: "Valentinetti",
          age: 2,
          sports: "potenti cras in",
          city: "Al ‘Ashshah",
          gender: "Female"
        },
        {
          id: 3,
          name: "Byrch",
          age: 3,
          sports: "maecenas leo",
          city: "Derviçian",
          gender: "Male"
        },
        {
          id: 4,
          name: "McCrystal",
          age: 4,
          sports: "ligula nec",
          city: "Villeneuve-lès-Avignon",
          gender: "Polygender"
        },
        {
          id: 5,
          name: "Pahl",
          age: 5,
          sports: "viverra eget congue",
          city: "Severskaya",
          gender: "Male"
        },
        {
          id: 6,
          name: "Halcro",
          age: 6,
          sports: "erat eros viverra",
          city: "Yashiro",
          gender: "Non-binary"
        },
        {
          id: 7,
          name: "Whenman",
          age: 7,
          sports: "ultrices posuere",
          city: "Tongliao",
          gender: "Female"
        },
        {
          id: 8,
          name: "Giacomuzzi",
          age: 8,
          sports: "eleifend luctus",
          city: "Lộc Bình",
          gender: "Male"
        },
        {
          id: 9,
          name: "Howgill",
          age: 9,
          sports: "eu",
          city: "Judita",
          gender: "Male"
        },
        {
          id: 10,
          name: "Bourner",
          age: 10,
          sports: "id luctus",
          city: "Nusajaya",
          gender: "Male"
        },
        {
          id: 11,
          name: "Dart",
          age: 11,
          sports: "gravida nisi",
          city: "Rakhiv",
          gender: "Male"
        },
        {
          id: 12,
          name: "Tume",
          age: 12,
          sports: "amet erat nulla tempus",
          city: "Oeiras",
          gender: "Male"
        },
        {
          id: 13,
          name: "Warke",
          age: 13,
          sports: "integer",
          city: "Boyu",
          gender: "Male"
        },
      
      
];

const Players = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {playersData.map(player => (
        <div key={player.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img alt={player.name} className="w-full h-40 object-cover mb-4" />
          <h2 className="text-lg font-semibold">{player.name}</h2>  
          <p className="text-sm text-gray-600">Age: {player.age}</p>
          <p className="text-sm text-gray-600">Sports: {player.sports}</p>
          <p className="text-sm text-gray-600">City: {player.city}</p>
          <p className="text-sm text-gray-600">Gender: {player.gender}</p>
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Connect
          </button>
        </div>
      ))}
    </div>
  );
};

export default Players;
