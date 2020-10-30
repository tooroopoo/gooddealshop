import bcrypt from 'bcryptjs';

const users=[
    {
        name:'Big Boss',
        email:'admin@gooddealshop.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Lady Nym',
        email:'nym@dorne.com',
        password:bcrypt.hashSync('123456',10),
        
    },
    {
        name:'Lord Stark',
        email:'eddard@winterfell.com',
        password:bcrypt.hashSync('123456',10),
        
    }
]

export default users;