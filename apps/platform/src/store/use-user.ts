import { User } from "@supabase/supabase-js";
import { atom, useAtom } from "jotai";

type Config = {
  user: User
};

const configAtom = atom<Config>({
    user: {} as User,
});

export function useUser() {
  return useAtom(configAtom);
}