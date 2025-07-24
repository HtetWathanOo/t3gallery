import "server-only"
import {db} from "./db";
import { auth } from "@clerk/nextjs/server";
export async function getMyImages(){
    const user = await auth();
    if(!user) throw new Error("Not authenticated");

    if (!user.userId) throw new Error("User ID not found");
    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId as string),
        orderBy: (model, { desc }) => desc(model.id),
    });
    return images;
}