import { Avatar } from "@material-tailwind/react";

const SettingsPage = () => {
  return (
    <div className="py-8 max-w-xl mx-auto flex items-center justify-center flex-col">
      <Avatar
        size="xxl"
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        className="mx-auto"
      />
      <form className="w-full mt-5 flex flex-col gap-4">
        <div>
          <label htmlFor="" className="text-white">
            Email
          </label>
          <input type="text" className="w-full rounded-sm p-2" />
        </div>
        <div>
          <label htmlFor="" className="text-white">
            Full Name
          </label>
          <input type="text" className="w-full rounded-sm p-2" />
        </div>
        <div>
          <label htmlFor="" className="text-white">
            Password
          </label>
          <input type="password" className="w-full rounded-sm p-2" />
        </div>
        <div>
          <label htmlFor="" className="text-white">
            Confirm Password
          </label>
          <input type="password" className="w-full rounded-sm p-2" />
        </div>
        <button className="bg-primary text-white py-2 px-4 rounded-sm mt-4">
          Save
        </button>
      </form>

      <button className="bg-red-500 w-full mt-16 py-2 rounded-sm text-red-50">
        Logout
      </button>
    </div>
  );
};

export default SettingsPage;
