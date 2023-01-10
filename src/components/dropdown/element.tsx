import { component$, useStore } from "@builder.io/qwik";

interface LanguageProps {
  language: string;
}

export default component$(({ language }: LanguageProps) => {

  return (
    <>
      <li>
        <a
          class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
          href="#"
        >
          {language}
        </a>
      </li>
    </>
  );
});
