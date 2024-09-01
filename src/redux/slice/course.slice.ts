import { createSlice } from "@reduxjs/toolkit";
import courses from '../../data/web_courses.json';

const initialState=[...courses.courseData];
const courseSlice=createSlice({
    name:"course",
    initialState,
    reducers:{
        enrollCourse(state,action){
            const index=action.payload
            console.log(index,"Enrolling course...")
            state[index].enrollmentStatus="In Progress";

        },
        markAsComplete(state,action){
            const index=action.payload
            state[index].enrollmentStatus="Closed";
        }
    }
})

export const {enrollCourse, markAsComplete}=courseSlice.actions;
export default courseSlice.reducer