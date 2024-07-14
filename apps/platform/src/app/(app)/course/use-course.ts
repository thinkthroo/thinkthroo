import { atom, useAtom } from "jotai";

type Config = {
  chapters: any[];
};

const configAtom = atom<Config>({
  chapters: [],
});

export function useCourse() {
  return useAtom(configAtom);
}