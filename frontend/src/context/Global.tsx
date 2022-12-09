/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  useMemo,
  createContext,
  useState,
} from "react";

import PropTypes from "prop-types";
import usePersistedState from "../hooks/usePersistentState";

interface IGlobalContext {
  token: string;
  setToken: (token: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const GlobalContext = createContext<IGlobalContext>({
  token: "",
  setToken: () => {},
  loading: false,
  setLoading: () => {}
});

interface IGlobalProvider {
  children: React.ReactNode;
}

export function GlobalProvider({ children }: IGlobalProvider) {
  const [token, setToken] = usePersistedState("@token", "");
  const [loading, setLoading] = useState(false)

  const memorizedContext = useMemo(
    () =>
      ({
        token,
        setToken,
        loading,
        setLoading
      } as IGlobalContext),
    [
      token,
      setToken,
      loading,
      setLoading
    ]
  );



  return (
    <GlobalContext.Provider value={memorizedContext}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
