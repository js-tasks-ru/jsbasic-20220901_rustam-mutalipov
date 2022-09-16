function showSalary(users, age) {
  let res = [];
  users.forEach(function (item) {
    if (item.age <= age) {
      res.push(`${item.name}, ${item.balance}`);
    }
  });
  return res.join('\n');


}





