import request from "supertest"
import app from "../../app"
import AppDataSource from "../../data-source"
import { WorkingAdvertise, NotWorkingAdvertise, NotPublishedAdvertise } from '../mocks/advertise.mocks'

beforeAll(async () => {
    await AppDataSource.initialize()
})

describe("GET /advertise", () => {

    it("Deve listar todos os anúncios", async () => {
        const response = await request(app).get("/advertise")
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

})

describe("POST /advertise", () => {
    it("Deve cadastrar um anúncio", async () => {
        const response = await request(app).post("/advertise").send(WorkingAdvertise)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("brand")
        expect(response.body).toHaveProperty("model")
        expect(response.body).toHaveProperty("year")
        expect(response.body).toHaveProperty("fuel")
        expect(response.body).toHaveProperty("odometer")
        expect(response.body).toHaveProperty("color")
        expect(response.body).toHaveProperty("fipe")
        expect(response.body).toHaveProperty("price")
        expect(response.body).toHaveProperty("description")
        expect(response.body).toHaveProperty("isPublished")
        expect(response.body).toHaveProperty("images")
        expect(response.body.images).toBeInstanceOf(Array)
    })

    it("Não deve cadastrar um anúncio com dados inválidos", async () => {
        const response = await request(app).post("/advertise").send(NotWorkingAdvertise)
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message")
    })
})

describe("GET /advertise/:id", () => {
    it("Deve retornar um anúncio pelo id", async () => {
        const data = await request(app).post("/advertise").send(WorkingAdvertise)

        const response = await request(app).get(`/advertise/${data.body.id}`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("brand")
        expect(response.body).toHaveProperty("model")
        expect(response.body).toHaveProperty("year")
        expect(response.body).toHaveProperty("fuel")
        expect(response.body).toHaveProperty("odometer")
        expect(response.body).toHaveProperty("color")
        expect(response.body).toHaveProperty("fipe")
        expect(response.body).toHaveProperty("price")
        expect(response.body).toHaveProperty("description")
        expect(response.body).toHaveProperty("isPublished")
        expect(response.body).toHaveProperty("images")
        expect(response.body.images).toBeInstanceOf(Array)
    })

    it("Não deve retornar um anúncio com id inválido", async () => {
        const response = await request(app).get("/advertise/0")
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("message")
    })

    it("Não deve retornar um anúncio não publicado", async () => {
        const data = await request(app).post("/advertise").send(NotPublishedAdvertise)

        const response = await request(app).get(`/advertise/${data.body.id}`)
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("message")
    })
})

describe("PATCH /advertise/:id", async () => {
    const data = await request(app).post("/advertise").send(WorkingAdvertise)

    it("Deve atualizar um anúncio", async () => {
        const response = await request(app).patch(`/advertise/${data.body.id}`).send({ ...WorkingAdvertise, brand: "Fiat" })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("brand")
        expect(response.body.brand).toBe("Fiat")
        expect(response.body).toHaveProperty("model")
        expect(response.body).toHaveProperty("year")
        expect(response.body).toHaveProperty("fuel")
        expect(response.body).toHaveProperty("odometer")
        expect(response.body).toHaveProperty("color")
        expect(response.body).toHaveProperty("fipe")
        expect(response.body).toHaveProperty("price")
        expect(response.body).toHaveProperty("description")
        expect(response.body).toHaveProperty("isPublished")
        expect(response.body).toHaveProperty("images")
        expect(response.body.images).toBeInstanceOf(Array)
    })

    it("Não deve atualizar um anúncio com dados inválidos", async () => {
        const response = await request(app).patch(`/advertise/${data.body.id}`).send(NotWorkingAdvertise)
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message")
    })

    it("Não deve atualizar um anúncio com id inválido", async () => {
        const response = await request(app).patch("/advertise/0").send(WorkingAdvertise)
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("message")
    })

})

describe("DELETE /advertise/:id", async () => {
    it("Deve deletar um anúncio", async () => {
        const data = await request(app).post("/advertise").send(WorkingAdvertise)

        const response = await request(app).delete(`/advertise/${data.body.id}`)
        expect(response.status).toBe(204)
        expect(response.body).toEqual({})
    })

    it("Não deve deletar um anúncio com id inválido", async () => {
        const response = await request(app).delete("/advertise/0")
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("message")
    })

})