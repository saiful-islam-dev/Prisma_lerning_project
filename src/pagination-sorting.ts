import { PrismaClient } from "@prisma/client";
import { CLIENT_RENEG_WINDOW } from "tls";
const prisma = new PrismaClient();

const paginationSoring = async() => {
     // offset pagination
    // const offsetdata = await prisma.post.findMany({
    //     skip: 5,
    //     take: 2
    // })
    // console.log(offsetdata)


    // cursor based pagination
    const cursorData = await prisma.post.findMany({
        skip: 2,
        take:2,
        cursor: {
            id: 19
        }
    })

    // console.log(cursorData);
    
    const sortedData = await prisma.post.findMany({
        orderBy: {
            id: 'desc'
        },
        skip: 2,
        take: 2,
        where: {
            title: "Title 1"
        }
    })

    console.log({sortedData})
}

paginationSoring();