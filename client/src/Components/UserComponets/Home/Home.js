import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { sessionHandle } from '../../../Redux/authSlic';

function Home() {
  const username = useSelector((state) => state.username);
  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border p-10 rounded-lg shadow">
        <div className="flex flex-col p-10">
          <img src="" alt="" className="" />
          <span className="text-2xl font-bold text-green-700 pb-3">WELCOME HOME </span>
          <span className="font-bold uppercase">User : {username}...</span>
          <Link to="/Profile">
            <span className="text-blue-500">Click</span> For Profile View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;



