const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const workoutSchema = new schema ({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an exercise type",
            },
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise name",
            },
            duration: {
                type: Number,
                required: "Enter an exercise duration in minutes",
            },
            distance: {
                type: Number,
                required: "Enter a distance",
            },
            weight: {
                type: Number,
                reuired: "Enter an number",
            },
            reps: {
                type: Number,
                required: "Enter number of reps",
            },
            sets: {
                type: Number,
                required: "Enter number of sets",
            }

        }
    ]
});

const Workout = mongoose.model("workout", WorkoutSchema);
module.exports = Workout;