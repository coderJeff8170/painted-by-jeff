import { createContext } from "react";
import file from "../data/db.json";


export const AnalogDataContext = createContext(file.analog);

export const DigitalDataContext = createContext(file.digital);