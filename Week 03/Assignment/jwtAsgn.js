const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if (!usernameResponse.success || !passwordSchema.success) {
        return null;
    }

    const signature = jwt.sign({
        username
    }, jwtPassword);
    return signature;
}
const ans = signJwt("vivek@gmail.com", "Vishal");
console.log(ans);

function verifyJwt(token){
    try {
        const verified = jwt.verify(token, jwtPassword);
        return true;
    } catch (error) {
        
    }

    return false;
}

function decodeJwt(token){

    //true, false
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}