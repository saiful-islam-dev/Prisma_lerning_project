import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async() =>{
    // const singleUpdate = await prisma.post.update({
    //     where:{
    //         id: 9
    //     },
    //     data:{
    //         title: "Title by Saiful Islam",
    //         authorName: "Saiful Isalm",
    //         content: "This is about the update opration in prisma"
    //     }
    // })

    // console.log(singleUpdate)


//     const updateMany = await prisma.post.updateMany({
//         where: {
//                     title: "Title 2"
//                 },
//                 data: {
//                     published: true
//                 }
//     })
// console.log(updateMany);


const upsertData = await prisma.post.upsert({
    where: {
        id: 18
    },
    update: {
        authorName: "saiful islam"
    },
    create: {
        title: "This is my title..!",
        content: "This is content my code"
    }
})

    console.log(upsertData)

}

main();