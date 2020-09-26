export const useStorage = () => {
  //取
  const getMessage = (key: string) => {
    return JSON.parse(localStorage.getItem(key)!);
    // if (typeof JSON.parse(localStorage.getItem(key)!) === "object") {
    // } else {
    //   return localStorage.getItem(key);
    // }
  };
  //存
  const setMessage = (key: string, target: any) => {
    return localStorage.setItem(key, JSON.stringify(target)!);
    // if (typeof target === "object" && !Array.isArray(target)) {
    // } else {
    //   return localStorage.setItem(key, target);
    // }
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
