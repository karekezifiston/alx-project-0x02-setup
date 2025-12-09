import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, username, address }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4 bg-white hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-gray-700 mb-1">@{username}</p>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
