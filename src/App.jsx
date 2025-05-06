import { useState } from "react";
import DataList from "./List/DataList";
import SearchBar from "./components/SearchBar";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import EditForm from "./components/EditForm";

function App() {
  const [data, setData] = useState(DataList);
  const [searchTerm, setSearchTerm] = useState("");

  //! delete
  const deleteItem = (id) => {
    setData(
      data.filter((item) => {
        return item.id !== id;
      })
    );
  };

  //! edit
  const editItem = (id) => {
    setData(
      data.map((item) => {
        return item.id == id ? { ...item, isEdit: !item.isEdit } : item;
      })
    );
  };

  //! update
  const updateItem = (newFname, newLname, newEmail, newPhone, id) => {
    setData(
      data.map((item) => {
        return item.id === id
          ? {
              ...item,
              first_name: newFname,
              last_name: newLname,
              email: newEmail,
              "phone no": newPhone,
              isEdit: !item.isEdit,
            }
          : item;
      })
    );
  };

  //! done
  const doneItem = (id) => {
    setData(
      data.map((item) => {
        return item.id === id ? { ...item, isDone: true } : item;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-violet-500 mb-8 underline">
        Contact-List.
      </h1>

      <div className="max-w-4xl mx-auto mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="overflow-x-auto max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-center">
          <thead>
            <tr className="bg-violet-300 text-gray-700 text-md border-b-2">
              <th className="py-5 px-6">ID</th>
              <th className="py-5 px-6">First Name</th>
              <th className="py-5 px-6">Last Name</th>
              <th className="py-5 px-6">Email</th>
              <th className="py-5 px-6">Phone No</th>
              <th className="py-5 px-6">Delete</th>
              <th className="py-5 px-10">Edit</th>
              <th className="py-5 px-10">Done</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-medium">
            {data
              .filter((item) => {
                return searchTerm.toLowerCase() === ""
                  ? item
                  : item.first_name
                      .toLowerCase()
                      .startsWith(searchTerm.toLowerCase());
              })
              .map((item) =>
                item.isEdit ? (
                  <EditForm key={item.id} item={item} updateItem={updateItem} />
                ) : (
                  <tr
                    key={item.id}
                    className={`border-b hover:bg-gray-100 transition duration-300 ${
                      item.isDone
                        ? "bg-green-100"
                        : "bg-violet-100 last:border-none"
                    }`}
                  >
                    <td className="py-4 px-6 text-gray-500">{item.id}</td>
                    <td className="py-4 px-6">{item.first_name}</td>
                    <td className="py-4 px-6">{item.last_name}</td>
                    <td className="py-4 px-6">{item.email}</td>
                    <td className="py-4 px-6">{item["phone no"]}</td>
                    <td className="py-4 px-10">
                      <span
                        className="text-red-500 hover:text-red-600 cursor-pointer"
                        onClick={() => deleteItem(item.id)}
                      >
                        <DeleteSweepIcon />
                      </span>
                    </td>
                    <td className="py-4 px-10">
                      <span
                        className="text-blue-500 hover:text-blue-600 cursor-pointer"
                        onClick={() => editItem(item.id)}
                      >
                        <EditSquareIcon />
                      </span>
                    </td>
                    <td className="py-4 px-10">
                      <span
                        className="text-green-500 hover:text-green-600 cursor-pointer"
                        onClick={() => doneItem(item.id)}
                      >
                        <LibraryAddCheckIcon />
                      </span>
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
