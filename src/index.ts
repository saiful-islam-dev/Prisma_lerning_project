import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async() =>{
    // const result = await prisma.post.create({
    //         data: {
    //             title: "This is title 2!",
    //             content: "This is content 2...",
    //             authorName: "Fahim Ahammed Firoz 2"
    //         }
    //     });
    
    //     console.log(result);

    const getAllFromDB = await prisma.post.findMany();
    console.log(getAllFromDB)
}

main();

// command for prisma
// npx prisma studio
// npx prisma migrate dev
