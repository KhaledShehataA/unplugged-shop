import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Khaled Shehata',
		email: 'khaled@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Ahmed Ayman',
		email: 'ahmed@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
