import { createContext, useCallback, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { authApi } from '@/api/auth';
import { Issuer } from '@/utils/auth';

const STORAGE_KEY = 'accessToken';

var ActionType;
(function (ActionType) {
  ActionType['INITIALIZE'] = 'INITIALIZE';
  ActionType['SIGN_IN'] = 'SIGN_IN';
  ActionType['SIGN_UP'] = 'SIGN_UP';
  ActionType['SIGN_OUT'] = 'SIGN_OUT';
})(ActionType || (ActionType = {}));

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  SIGN_IN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  SIGN_UP: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  SIGN_OUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  })
};

const reducer = (state, action) => (handlers[action.type]
  ? handlers[action.type](state, action)
  : state);

export const AuthContext = createContext({
  ...initialState,
  issuer: Issuer.Auth,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  signOut: () => Promise.resolve()
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = window.localStorage.getItem(STORAGE_KEY);
      if (localStorage.getItem('time_token')) {
        var token = localStorage.getItem('time_token');
        var tokenObj = JSON.parse(token);
        if (new Date().getTime() - tokenObj.time >= tokenObj.expire) {
          localStorage.removeItem('email')

          localStorage.removeItem('time_token')
          // dispatch({
          //   type: ActionType.INITIALIZE,
          //   payload: {
          //     isAuthenticated: false,
          //     user: null
          //   }
          // });
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user
            }
          });
        }
        else {
          let obj = {
            time: new Date().getTime(),
            value: "email",
            expire: 3000000,
          }
          // You can only store strings
          let objStr = JSON.stringify(obj);
          localStorage.setItem("time_token", objStr);
          const user = await authApi.me({ accessToken });
          // const user = null;
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user
            }
          });
        }



      } else {
        // alert('localStorage has expired');
        localStorage.removeItem('email')

        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
      // if (accessToken) {
      //   const user = await authApi.me({ accessToken });
      //   // const user = null;
      //   dispatch({
      //     type: ActionType.INITIALIZE,
      //     payload: {
      //       isAuthenticated: true,
      //       user
      //     }
      //   });
      // } else {
      //   dispatch({
      //     type: ActionType.INITIALIZE,
      //     payload: {
      //       isAuthenticated: false,
      //       user: null
      //     }
      //   });
      // }
    } catch (err) {
      console.error(err);
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null
        }
      });
    }
  }, [dispatch]);

  useEffect(() => {
    initialize();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  const signIn = useCallback(async (email, password, userinfo) => {

    const { api_token } = userinfo;
    const user = userinfo;
    console.log(api_token);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(api_token));
    window.localStorage.setItem("email", JSON.stringify(userinfo.email));
    let obj = {
      time: new Date().getTime(),
      value: "email",
      expire: 3000000,
    }
    // You can only store strings
    let objStr = JSON.stringify(obj);
    localStorage.setItem("time_token", objStr);
    // window.localStorage.setItem("time_token", JSON.stringify(userinfo.email));
    // window.localStorage.setItem("user", userinfo)
    dispatch({
      type: ActionType.SIGN_IN,
      payload: {
        user
      }
    });
  }, [dispatch]);

  const signUp = useCallback(async (email, name, password) => {
    const { accessToken } = await authApi.signUp({ email, name, password });
    const user = await authApi.me({ accessToken });

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(accessToken));

    dispatch({
      type: ActionType.SIGN_UP,
      payload: {
        user
      }
    });
  }, [dispatch]);

  const signOut = useCallback(async () => {

    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("time_token");
    dispatch({ type: ActionType.SIGN_OUT });
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        issuer: Issuer.Auth,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const AuthConsumer = AuthContext.Consumer;
