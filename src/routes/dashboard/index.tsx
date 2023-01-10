import {
  component$,
  useClientEffect$,
  useStore,
} from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import DashHeader from "~/components/dashHeader/dashHeader";
import Dropdown from "~/components/dropdown";
import SearchBar from "~/components/searchBar";
import Table from "~/components/table";

export default component$(() => {
  const state = useStore({
    pageLoaded: false,
  });

  useClientEffect$(
    () => {
      if (localStorage.getItem("token") !== "tokenValue") {
        // window.location.href = `${window.location.origin}`
      } else {
        state.pageLoaded = true;
      }
    },
    { eagerness: "load" }
  );

  //   if (!state.pageLoaded) return <div></div>

  return (
    <>
      <DashHeader />
      <div class="mt-5 flex items-center justify-center">
        Language
      </div>
      <div class="flex items-center justify-center">
        <div
          class="my-5 inline-flex items-center gap-5"
          role="group"
        >
          <Dropdown />
          TO
          <Dropdown />
        </div>
      </div>
      <Table />
    </>
  );
});

export const head: DocumentHead = {
  title: "Dashboard",
};
