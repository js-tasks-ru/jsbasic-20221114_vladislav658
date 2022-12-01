// от vladislav658
function showSalary(users, age) {
	
  getUsersFilter = users
    .filter(users => (users.age <= age))
    .map(users => (users.name +  ", " + users.balance));
	
  return getUsersFilter.join('\n');
}
