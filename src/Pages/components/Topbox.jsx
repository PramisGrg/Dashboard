import { topDealUsers } from "../../data";

const Topbox = () => {
  return (
    <div>
      <h1 className="text-3xl mb-4">Users</h1>
      <div>
        {topDealUsers.map((user) => (
          <div className="flex items-center justify-between " key={user.id}>
            <div className="">
              <img className="w-10 h-10 rounded-3xl" src={user.img}></img>
              <div className="flex-col">
                <span>{user.username}</span>
                <span>{user.email}</span>
              </div>
              <span>${user.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbox;
