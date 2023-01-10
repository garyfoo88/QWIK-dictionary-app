import { component$ } from "@builder.io/qwik";

interface ModalBodyProps {
  state: {
    word: string;
    meaning: string;
    pronunciation: string;
  };
}

export default component$(({ state }: ModalBodyProps) => {
  return (
    <>
      <div class="flex justify-center">
        <div class="mb-3 w-96">
          <label
            for="exampleText0"
            class="form-label inline-block mb-2 text-gray-700"
          >
            WORD/SENTENCE
          </label>
          <input
            type="text"
            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleText0"
            placeholder="Text input"
            onChange$={(e) => {
              state.word = e.target.value;
            }}
          />
        </div>
      </div>
      <div class="flex justify-center">
        <div class="mb-3 w-96">
          <label
            for="exampleFormControlTextarea1"
            class="form-label inline-block mb-2 text-gray-700"
          >
            MEANING/EXAMPLE
          </label>
          <textarea
            onChange$={(e) => {
              state.meaning = e.target.value;
            }}
            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder="Your message"
          ></textarea>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="mb-3 w-96">
          <label
            for="exampleText0"
            class="form-label inline-block mb-2 text-gray-700"
          >
            PRONUNCIATION
          </label>
          <input
            onChange$={(e) => {
              state.pronunciation = e.target.value;
            }}
            type="text"
            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleText0"
            placeholder="Text input"
          />
        </div>
      </div>
    </>
  );
});
