
import { rest } from 'msw'
import { v4 } from "uuid"
const stories = [
    {
        id: v4(),
        name: "DocumentName",
        type: 'error',
        createdAt: "2022-02-28T01:01:00.000Z",

    },
    {
        id: v4(),
        name: "DocumentName",
        type: 'error',
        createdAt: "2022-03-28T01:00:00.000Z",

    },
    {
        id: v4(),
        name: "DocumentName",
        type: 'dev',
        createdAt: "2022-03-25T01:00:00.000Z",

    },
    {
        id: v4(),
        name: "DocumentName",
        type: 'dev',
        createdAt: "2022-02-20T01:00:00.000Z",

    },
    {
        id: v4(),
        name: "DocumentName",
        type: 'dev',
        createdAt: "2022-02-22T01:00:00.000Z",

    },
]

export default [
    rest.get('/stories', (req, res, ctx) => {
        return res(
            ctx.json({ done: true, stories })
        )
    }),

]