import { createContext } from "react";

const AppointmentsContext = createContext();

export const Provider = AppointmentsContext.Provider;
export const Consumer = AppointmentsContext.Consumer;
export default AppointmentsContext;
