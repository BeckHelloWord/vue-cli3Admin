import Mock from "mockjs"; // 引入mockjs
import userList from "./userList";

const list = [userList];

for (let key in list) {
  let obj = list[key];
  Mock.mock(obj.url, obj.method, obj.result);
}
