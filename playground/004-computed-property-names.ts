// Hello, TypeScript! @jdomingu19
// Playground 004: Computed Property Names

(() => {
  // 1. Demonstrating difference between computed property names and literal keys
  let myKey = "alias";
  let myValue = "@jdomingu19";

  const userInfo1 = {
    id: 1,
    name: "Jesús",
    [myKey]: myValue, // Computed property name: key resolved as "alias"
  };

  const userInfo2 = {
    id: 2,
    name: "Jesús",
    myKey: myValue, // Literal key: property name is "myKey", not "alias"
  };

  const userInfo3 = {
    id: 3,
    name: "Jesús",
    myKey: [myValue], // Literal key with array value: property name is "myKey"
  };

  const userInfo4 = {
    id: 4,
    name: "Jesús",
    [myKey]: [myValue], // Computed property name with array value: key resolved as "alias"
  };

  console.log(userInfo1); // { id: 1, name: 'Jesús', alias: '@jdomingu19' }
  console.log(userInfo2); // { id: 2, name: 'Jesús', myKey: '@jdomingu19' }
  console.log(userInfo3); // { id: 3, name: 'Jesús', myKey: [ '@jdomingu19' ] }
  console.log(userInfo4); // { id: 4, name: 'Jesús', alias: [ '@jdomingu19' ] }

  // 2. Using expressions as property names
  const prefix = "user";
  const index = 42;

  const obj = {
    [`${prefix}_${index}`]: "special value",
  };

  console.log(obj); // { user_42: 'special value' }
  console.log(obj.user_42); // special value

  // 3. Computed property names in interfaces
  interface ConfigInterface {
    [key: string]: string | number;
  }

  const config: ConfigInterface = {
    ["port"]: 3000,
    ["host"]: "localhost",
  };

  console.log(config); // { port: 3000, host: 'localhost' }
  console.log(config.port); //  3000
  console.log(config.host); //  localhost

  // 4. Using enums as computed property names
  enum RolesEnum {
    ADMIN = "admin",
    USER = "user",
  }

  const permissions = {
    [RolesEnum.ADMIN]: ["create", "read", "update", "delete"],
    [RolesEnum.USER]: ["read"],
  };

  console.log(permissions.admin); // ['create', 'read', 'update', 'delete']
  console.log(permissions.user); // ['read']
})();
