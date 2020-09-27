export const useStorage = () => {
  //取
  const getMessage = (key: string) => {
    if (typeof localStorage.getItem(key)! === "object") {
      return JSON.parse(localStorage.getItem(key)!);
    } else {
      return localStorage.getItem(key);
    }
  };
  //存
  const setMessage = (key: string, target: any) => {
    if (typeof target === "object" && !Array.isArray(target)) {
      return localStorage.setItem(key, JSON.stringify(target)!);
    } else {
      return localStorage.setItem(key, target);
    }
  };
  //清除单一
  const clearMessage = (key: string) => {
    return localStorage.removeItem(key);
  };

  return {
    getMessage,
    setMessage,
    clearMessage,
  };
};
