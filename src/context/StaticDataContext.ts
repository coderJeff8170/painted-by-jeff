import { createContext } from "react";
// import file from "../../db.json";
import file from "../data/artwork.json";


export const StaticDataContext = createContext(file);