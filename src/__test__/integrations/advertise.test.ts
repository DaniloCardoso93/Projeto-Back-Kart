import request from "supertest"
import app from "../../app"

describe("GET /advertise", () => {

    it("Deve listar todos os anúncios", async () => {
        const response = await request(app).get("/advertise")
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

})