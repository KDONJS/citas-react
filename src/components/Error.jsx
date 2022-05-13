const Error = ({children}) => {
  return (
    
      <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 flex ">
          {" "}
          <svg
            className=" animate-spin h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
          Peligro
        </div>
        <div className=" mb-5 border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>{children}</p>
        </div>
      </div>
   
  );
};

export default Error;
