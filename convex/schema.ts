import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    clerkId: v.string(),
    imageUrl: v.optional(v.string()),
  }).index("by_clerk_id", ["clerkId"]),

  plans: defineTable({
    userId: v.id("users"),
    name: v.string(),
    workoutPlan: v.object({
      schedule: v.array(v.string()),
      exercises: v.array(
        v.object({
          day: v.string(),
          routine: v.array(
            v.object({
              name: v.string(),
              sets: v.number(),
              reps: v.number(),
              duration: v.string(),
              description: v.string(),
              exercises: v.array(v.string()),
            })
          ),
        })
      ),
    }),

    dietPlan: v.object({
      daulyCalories: v.number(),
      meals: v.array(
        v.object({
          name: v.string(),
          foods: v.array(v.string()),
        })
      ),
    }),

    isActive: v.boolean(),
  })
    .index("by_user_id", ["userId"])
    .index("by_active", ["isActive"]),
});
