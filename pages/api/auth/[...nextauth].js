import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { CredentialsProvider } from "next-auth/providers/credentials";
import connectMongo from "@/database/conn";
import Users from "@/model/Schema";
import { compare } from "bcryptjs";

// const google_id = "301740388989-puqev50h5ab77go5s8efjcro890uph2f.apps.googleusercontent.com";
// const google_secret = "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"

export default NextAuth({
    secret: process.env.SECRET,
    providers:[
        //Google Provider
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        }),
        GithubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        // CredentialsProvider({
        //     name:"Credentials",
        //     async authorize(credentials,req){
        //     connectMongo().catch(error=> {error:"Connection Failed"})
        //     //check user existance
        //     const result =await Users.findOne({email:credentials.email})
        //     if(!result){
        //         throw new Error("No user Found with Email Please Signup..!")
        //     }
        //     //compare both password
        //     const checkPassword = await compare(credentials.password, result.password)
        //     if(!checkPassword || result.email !== credentials.email){
        //         throw new Error("Username or Password doesn't match");

        //     }
        //     return result
        //     }
        // })
    ],
    secret: "9faf1f2bc825809388691eac5e8fe04df73e1df476894881db497178c81a1aa6",
})