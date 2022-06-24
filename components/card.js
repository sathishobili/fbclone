const Card = () => {
  return (
    <div className="w-64 bg-gray-300 rounded-lg overflow-hidden m-2">
      <div>
        <img
          className="object-cover"
          src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </div>
      <div className="py-4 px-3 text-gray-800">
        <div>
          <span className="text-xs bg-orange-300 text-orange-900 rounded-full px-1 tracking-tight m-1">
            HOT
          </span>
          <span className="text-xs bg-red-300 text-red-900 rounded-full px-1 tracking-tight m-1">
            NEW
          </span>
        </div>
        <h3 className="text-xl font-bold mt-2">Nike Sneakers</h3>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <p className="font-bold tracking-wide mt-1 text-lg text-teal-800">
          $100
        </p>
      </div>
    </div>
  );
};

export default Card;
