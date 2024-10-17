const request = require("supertest")
const server = require ("../index")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const testUser = {
    email : "test@test.com",
    password : "Password@!21"
}


describe("POST /api/v1/auth/signup", () => {
    it("should response with 200 status code", (done) => {
        request(server)
            .post("/api/v1/auth/signup")
            .send(testUser)
            .set("Accept", "application/json")
            .then((res)=> {
                expect(res.statusCode).toBe(200)
                expect(res.body).toEqual(expect.objectContaining({
                    code: 200,
                    status: "success",
                    message: "Sign up successfully",
                    data : expect.objectContaining({
                        user: {
                            email:"test@test.com",
                            password: expect.not.stringContaining("Password@!21"),
                            address: null,
                            avatar: null,
                            birthdate: null,
                            driver_license: null,
                            fullname: null,
                            gender: null,
                            phone_number: null,
                            role_id: 3,
                            createdBy: null,
                            createdDt: expect.any(String),
                            updatedBy: null,
                            updatedDt: expect.any(String),
                        }
                    })
                })
                )
                done()
            })
            .catch(e => {
                console.log(e)
                done()
            })
    })
    it("should response with 400 status code", (done) => {
        request(server)
            .post("/api/v1/auth/signup")
            .send({
                email : "test@test.com",
                password : "Password@!21"
            })
            .set("Accept", "application/json")
            .then((res)=> {
                expect(res.statusCode).toBe(400)
                expect(res.body).toEqual(expect.objectContaining({
                    code: 400,
                    status: "Error",
                    message: "Email already exist!",
                }))
                done()
            })
            })

    })


describe("POST /api/v1/auth/signin", () => {
    it("should response with 200 status code", (done) => {
        request(server)
            .post("/api/v1/auth/signin")
            .send(testUser)
            .set("Accept", "application/json")
            .then((res)=> {
                expect(res.statusCode).toBe(200)
                expect(res.body).toEqual(expect.objectContaining({
                    code: 200,
                    status: "success",
                    message: "Sign in successfully",
                    data : expect.objectContaining({
                        user: {
                            email:"test@test.com",
                            address: null,
                            avatar: null,
                            birthdate: null,
                            driver_license: null,
                            fullname: null,
                            gender: null,
                            phone_number: null,
                            role_id: 3,
                            createdBy: null,
                            createdDt: expect.any(String),
                            updatedBy: null,
                            updatedDt: expect.any(String),
                        }
                    })
                }))
                done()
            })
            .catch(e => {
                console.log(e)
                done()
            })
    })

    it("should response with 400 status code", (done) => {
        request(server)
            .post("/api/v1/auth/signin")
            .send({
                email : "testo@test.com",
                password : "Password@!21"
            })
            .set("Accept", "application/json")
            .then((res)=> {
                expect(res.statusCode).toBe(400)
                expect(res.body).toEqual(expect.objectContaining({
                    code: 400,
                    status: "Error",
                    message: "Invalid email or password",
                }))
                done()
            })
            })
         

    
   
})


