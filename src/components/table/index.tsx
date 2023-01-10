import {
  component$,
  useClientEffect$,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { IWordData, MOCK_WORD_DATA } from "~/api/getWordData";
import Modal from "../modal";
import SearchBar from "../searchBar";
import Row from "./row";

export default component$(() => {
  const state = useStore({
    localData: [],
  });

  useClientEffect$(
    () => {
      const localStorageData = localStorage.getItem("wordData");
      if (localStorageData) {
        state.localData = JSON.parse(localStorageData);
      }
    },
    { eagerness: "load" }
  );

  return (
    <section class="py-1 bg-blueGray-50">
      <div class="w-full xl:w-11/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex flex-wrap items-center">
              <SearchBar />
              <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <Modal />
              </div>
            </div>
          </div>
          <div class="block w-full overflow-x-auto">
            <table class="table-fixed items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th class="w-3/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Word/Sentence
                  </th>
                  <th class="w-4/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Meaning/Example
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Pronunciation
                  </th>
                  <th class="w-2/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {MOCK_WORD_DATA.map(
                  ({ word, meaning, pronunciation }: IWordData, i) => {
                    return (
                      <Row
                        key={i}
                        word={word}
                        meaning={meaning}
                        pronunciation={pronunciation}
                      />
                    );
                  }
                )}
                {/* local storage data */}
                {state.localData.map(
                  ({ word, meaning, pronunciation }: IWordData, i: any) => {
                    return (
                      <Row
                        key={i}
                        word={word}
                        meaning={meaning}
                        pronunciation={pronunciation}
                      />
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
});
