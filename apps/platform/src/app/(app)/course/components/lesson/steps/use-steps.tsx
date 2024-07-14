import { atom, useAtom } from "jotai";


type Config = {
  selected: any; // FIXME: fix type
};

const configAtom = atom<Config>({
  selected: {} as any
});

export function useSteps() {
  return useAtom(configAtom);
}