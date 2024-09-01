import { configureStore } from "@reduxjs/toolkit"

import courseSlice  from './slice/course.slice'

const store= configureStore({
    reducer:{
        course:courseSlice
    }
})
export  default store