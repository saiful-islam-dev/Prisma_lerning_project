import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async() =>{
    // const singelDelete = await prisma.post.delete({
    //     where: {id: 1}
    // })

    // console.log(singelDelete);

    const deleteMany = await prisma.post.deleteMany({
        where: {
            title: "Title 1"
        }
    })

    console.log(deleteMany)

}


main();