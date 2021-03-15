/* eslint-disable @typescript-eslint/explicit-member-accessibility */
export type IStorage = {
  get: (name: string) => string | null;
  set: (name: string, value: string) => void;
  clear: (name: string) => void;
}