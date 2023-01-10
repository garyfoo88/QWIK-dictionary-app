import { component$ } from "@builder.io/qwik";

interface RowDataProps {
  word: string;
  meaning: string;
  pronunciation: string;
}

export default component$(({ word, meaning, pronunciation }: RowDataProps) => {
  return (
    <tr>
      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left text-blueGray-700 ">
        {word}
      </th>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 ">
        {meaning}
      </td>
      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs p-4">
        {pronunciation}
      </td>
      <td class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
        <button
          class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-4 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Edit
        </button>
        <button
          class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-4 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Delete
        </button>
      </td>
    </tr>
  );
});
