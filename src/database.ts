import { COURSE_STACK, TCourse, TStudent } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
]

export const students: TStudent[] = [
    {
        id: "c001",
        name: "Felipe",
        age: 13
    },
    {
        id: "c002",
        name: "Mario",
        age: 12
    },
    {
        id: "c003",
        name: "Iago",
        age: 11
    }
]