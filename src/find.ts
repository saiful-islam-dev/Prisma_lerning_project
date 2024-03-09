import { PrismaClient } from "@prisma/client";
import { publicDecrypt } from "crypto";
import { CLIENT_RENEG_LIMIT } from "tls";

const prisma = new PrismaClient();

const main = async() =>{
    // find all 
    const getAllFromDB = await prisma.post.findMany({
        select: {
            authorName: true
        }
    });

    // console.log("find all data",getAllFromDB);

    const findFirst = await prisma.post.findFirst({
        where: {
            published: true
        }
    });

    // console.log("Find first",findFirst)

    const findUnique = await prisma.post.findUnique({
        where: {
            id: 4
        },
        select:{
            title: true,
            content: true,
            authorName: true
        }
    })

    console.log({findUnique})
}


main();