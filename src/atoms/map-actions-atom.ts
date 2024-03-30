import { atom } from "recoil";

export const mapActionsAtom = atom<any>({
    key: 'mapActionsAtom', 
    default: {
        selectedCity: null,
        selectedCountry: null,
        selectedProject: null,
        renderAllProjects: true
    }
  });