import { writable } from "svelte/store";
import type { Language } from "./types";

export const languagesStore = writable<Language[]>([]);
export const numberOfRepos = writable(0);
