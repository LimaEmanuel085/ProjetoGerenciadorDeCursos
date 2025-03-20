const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.viewUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
}

exports.createUser = async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    })

    res.send('Deu bom')
}

exports.deleteUser = async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id 
        }
    })

    res.status(200).json({message: 'User deleted sucessfull'})
}