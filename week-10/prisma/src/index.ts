import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(email: string, {
    firstName,
    lastName
}: UpdateParams) {``
  
const res = await prisma.user.update({
    where:{email:email},
    data:{firstName,lastName}
})
console.log(res)
}
updateUser('gsarth',{firstName:'hello' , lastName:'hiii'})