import { createContext } from "react";
import file from "../../db.json";


export const StaticDataContext = createContext(file);