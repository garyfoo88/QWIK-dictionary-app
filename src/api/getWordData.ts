export const getWordData = async (
  clientId: string,
  fromLanguage: string,
  toLanguage: string
): Promise<void> => {
  // api call
};

export interface IWordData {
  word: string;
  meaning: string;
  pronunciation: string;
}

export const MOCK_WORD_DATA: IWordData[] = [
  {
    word: "Bạn khỏe không?",
    meaning: "How are you?",
    pronunciation: "Bun kho-a hong",
  },
  {
    word: "tôi muốn ăn",
    meaning: "i want to eat",
    pronunciation: "toy moo-on un",
  },
  {
    word: "sao cũng được",
    meaning: "whatever",
    pronunciation: "su-o koong doo-oc",
  },
  {
    word: "Anh Nhớ Em",
    meaning:
      "I miss you (anh is used for older person speaking to a young person(em))",
    pronunciation: "I-ng Ni-O Am",
  },
];
